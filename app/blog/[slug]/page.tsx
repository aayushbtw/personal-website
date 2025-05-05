import type { Metadata } from "next";
import { formatDate } from "@/lib/utils";
import { getAllPosts, getPost } from "@/lib/post";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { Body, metadata } = await getPost(slug);

  return (
    <div className="container">
      <h1 className="sm:text-4xl text-2xl text-balance mb-2">
        {metadata.title}
      </h1>
      <span className="text-muted-foreground">{metadata.date}</span>
      <article className="mt-4">
        <Body />
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await getPost(slug);

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      publishedTime: formatDate(metadata.date),
      type: "article",
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      card: "summary_large_image",
      creator: "@aayushbtw",
    },
  };
}

export function generateStaticParams() {
  return getAllPosts();
}

export const dynamicParams = false;
