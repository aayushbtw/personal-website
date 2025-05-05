import { site } from "@/config/site";

type Repo = {
  name: string;
  description: string | null;
  href: string;
  language: string | null;
  pushedAt: string;
};

async function getRepo(repo: string): Promise<Repo> {
  const res = await fetch(
    `https://api.github.com/repos/${site.socials.github}/${repo}`,
    { cache: "force-cache" },
  );
  if (!res.ok) throw new Error(res.statusText);

  const data = await res.json();
  return {
    name: data.name,
    description: data.description,
    href: data.html_url,
    language: data.language,
    pushedAt: data.pushed_at,
  };
}

export async function getAllRepos(repoNames: string[]) {
  const repos: Repo[] = [];

  await Promise.all(
    repoNames.map(async (name) => {
      try {
        const repo = await getRepo(name);
        console.log(repo);
        repos.push(repo);
      } catch (error) {
        console.log(error);
      }
    }),
  );

  repos.sort((a, b) => {
    const dateA = new Date(a.pushedAt);
    const dateB = new Date(b.pushedAt);
    return dateB.getTime() - dateA.getTime();
  });

  return repos;
}
