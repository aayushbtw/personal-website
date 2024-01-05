import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: "Aayush's Blog",
    description: "A blog on programming and technology trends.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
    })),
    stylesheet: "/styles.xsl",
    customData: `<language>en-us</language>`,
  });
}
