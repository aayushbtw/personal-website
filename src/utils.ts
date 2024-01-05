import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(posts: CollectionEntry<"posts">[]) {
  return posts.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

// export function getPostsByTag(
//   posts: CollectionEntry<"posts">[],
//   tag: string
// ): { posts: CollectionEntry<"posts">[]; tag: string } {
//   const filteredPosts = posts.filter((post) => post.data.tags.includes(tag));
//   return { posts: sortPostsByDate(filteredPosts), tag: tag };
// }

// export function getAllTags(posts: Array<CollectionEntry<"posts">>) {
//   return posts.flatMap((post) => [...post.data.tags]);
// }

// export function getUniqueTags(posts: Array<CollectionEntry<"posts">>) {
//   return [...new Set(getAllTags(posts))];
// }

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(posts: Array<CollectionEntry<"posts">>) {
  return posts.flatMap((post) => [...post.data.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTags(posts: Array<CollectionEntry<"posts">>) {
  return [...new Set(getAllTags(posts))];
}
