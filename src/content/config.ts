import { z, defineCollection } from "astro:content";

// Credits: https://github.com/chrismwilliams/astro-theme-cactus
function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
  }),
});

export const collections = {
  posts,
};
