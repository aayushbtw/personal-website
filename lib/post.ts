import path from "node:path";
import fs from "node:fs";

export async function getPost(slug: string) {
  const { default: Body, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return { Body, metadata };
}

export function getAllPosts() {
  return fs
    .readdirSync(path.join(process.cwd(), "content/blog"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}

export async function getCraft(slug: string) {
  const { default: Body, metadata } = await import(
    `@/content/crafts/${slug}.mdx`
  );

  return { Body, metadata };
}

export function getAllCrafts() {
  return fs
    .readdirSync(path.join(process.cwd(), "content/crafts"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(".mdx", "") }));
}
