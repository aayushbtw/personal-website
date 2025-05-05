import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/post";

export default async function Blog() {
  const posts = getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const { metadata } = await getPost(post.slug);
      return {
        term: metadata.title,
        date: metadata.date,
        href: "blog/" + post.slug,
      };
    }),
  );

  return (
    <section className="container">
      <h4 className="sm:text-xl text-lg text-balance sm:mb-4 mb-2">Blog</h4>

      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div
            key={item.term}
            className="flex flex-col gap-1 sm:gap-0 sm:flex-row sm:justify-between"
          >
            <Link href={item.href} className="lowercase">
              {item.term}
            </Link>
            <span className="text-muted-foreground">{item.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
