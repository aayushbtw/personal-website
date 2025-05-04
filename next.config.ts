import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
    // remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
    ],
    format: "mdx",
  },
});

export default withMDX(nextConfig);
