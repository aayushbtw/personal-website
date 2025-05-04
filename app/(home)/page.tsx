import { Fragment } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
      <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty mb-4">
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

function Projects() {
  const items = [
    {
      term: "monit",
      description: "monitor server stats via ssh",
      href: "https://github.com/aayushbtw/monit",
    },
    {
      term: "z",
      description: "simple cli tool for encoding and decoding strings",
      href: "https://github.com/aayushbtw/z",
    },
    {
      term: "tt",
      description: "minimalist cli typing speed test",
      href: "https://github.com/aayushbtw/tt",
    },
  ];

  return (
    <section className="container">
      <h4 className="sm:text-xl text-lg text-balance sm:mb-4 mb-2">projects</h4>

      <div className="flex flex-col space-y-4">
        {items.map((item) => (
          <div key={item.term}>
            <div className="font-medium text-foreground/80">
              <Link href={item.href} target="_blank">
                {item.term}
              </Link>
            </div>

            <div className="text-muted-foreground">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
