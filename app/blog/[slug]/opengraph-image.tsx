import { ImageResponse } from "next/og";
import { getPost } from "@/lib/post";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "edge";

export default async function Image({ params }: { params: { slug: string } }) {
  const { metadata } = await getPost(params.slug);
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-[#161616] text-white text-6xl">
        {metadata.title}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist Mono",
          data: await loadGoogleFont("Geist Mono", metadata.title),
          style: "normal",
        },
      ],
    },
  );
}

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}
