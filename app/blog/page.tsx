import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/post";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "lucide-react";
import { Section, SectionTitle, SectionContent } from "@/components/ui/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Blog() {
  const posts = getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const { metadata } = await getPost(post.slug);
      return {
        title: metadata.title,
        date: metadata.date,
        description: metadata.description,
        href: "blog/" + post.slug,
      };
    }),
  );

  return (
    <Section>
      <SectionTitle>Blog Posts</SectionTitle>
      <SectionContent className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            target="_self"
            className="no-underline"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <span>{item.title}</span>
                  <ArrowUpRightIcon className="size-4 text-muted-foreground/50" />
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <Badge>{item.date}</Badge>
            </Card>
          </Link>
        ))}
      </SectionContent>
    </Section>
  );
}
