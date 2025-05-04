import path from "node:path";
import fs from "node:fs";

export async function getPost(slug: string) {
  const { default: Body, metadata } = await import(`@/content/${slug}.mdx`);

  return { Body, metadata };
}

export function getAllPosts() {
  return fs
    .readdirSync(path.join(process.cwd(), "content"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}
