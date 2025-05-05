import { Fragment } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MapPin } from "lucide-react";
import { getAllRepos } from "@/lib/github";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Work />
      <Projects />
    </Fragment>
  );
}

function Hero() {
  const items = ["GoLang", "Node.js", "Python", "Zoho Creator"];
  return (
    <section className="container">
      <h1 className="sm:text-4xl text-2xl text-balance mb-4">Aayush Agarwal</h1>

      <div className="inline-flex items-center gap-2 text-sm mb-2">
        <MapPin className="size-3.5" />{" "}
        <span className="text-muted-foreground">india</span>
      </div>

      <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty mb-2">
        full-stack web dev
      </p>

      <p className="text-muted-foreground">
        {items.map((item) => (
          <Fragment key={item}>
            <Badge>{item}</Badge>{" "}
          </Fragment>
        ))}
      </p>
    </section>
  );
}

function Work() {
  const items = [
    {
      term: "web dev at netision",
      description: "2024 - present",
    },
  ];
  return (
    <section className="container">
      <h4 className="sm:text-xl text-lg text-balance sm:mb-4 mb-2">work</h4>

      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div key={item.term} className="flex justify-between">
            <div className="font-medium text-foreground/80">{item.term}</div>
            <div className="md:col-span-3 text-muted-foreground">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

async function Projects() {
  const items = await getAllRepos([
    "monit",
    "z",
    "tt",
    "time",
    "personal-website",
  ]);

  return (
    <section className="container">
      <h4 className="sm:text-xl text-lg text-balance sm:mb-4 mb-2">projects</h4>

      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="group no-underline flex justify-between items-start border-l-2 border-transparent hover:border-border pl-0 hover:pl-2 transition-all duration-300"
          >
            <div>
              <span className="flex items-center gap-1 font-medium text-foreground/80 mb-1 leading-none">
                <span>{item.name}</span>
                <ArrowUpRight className="size-4 text-muted-foreground/50" />
              </span>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            <Badge>{item.language}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
