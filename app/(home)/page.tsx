import { Fragment } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon, MapPinIcon } from "lucide-react";
import { getAllRepos } from "@/lib/github";
import { Section, SectionTitle, SectionContent } from "@/components/ui/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Section>
      <SectionTitle className="sm:text-4xl text-2xl">
        Aayush Agarwal
      </SectionTitle>
      <SectionContent>
        <div className="inline-flex items-center gap-2 text-sm mb-2">
          <MapPinIcon className="size-3.5" />
          <span className="text-muted-foreground">India</span>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-lg text-pretty mb-2">
          Full-stack web dev
        </p>

        <p className="text-muted-foreground">
          {items.map((item) => (
            <Fragment key={item}>
              <Badge>{item}</Badge>{" "}
            </Fragment>
          ))}
        </p>
      </SectionContent>
    </Section>
  );
}

function Work() {
  const items = [
    {
      name: "Netision",
      description: "Full-stack web developer",
      href: "https://www.netision.com/",
      duration: {
        from: "2024",
        to: "Present",
      },
    },
  ];
  return (
    <Section>
      <SectionTitle>Work</SectionTitle>
      <SectionContent className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="no-underline"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <span>{item.name}</span>
                  <ArrowUpRightIcon className="size-4 text-muted-foreground/50" />
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <div className="flex gap-1">
                <Badge>{item.duration.from}</Badge>
                <span className="text-muted-foreground">&mdash;</span>
                <Badge>{item.duration.to}</Badge>
              </div>
            </Card>
          </Link>
        ))}
      </SectionContent>
    </Section>
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
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <SectionContent className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            className="no-underline"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  <span>{item.name}</span>
                  <ArrowUpRightIcon className="size-4 text-muted-foreground/50" />
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <Badge>{item.language}</Badge>
            </Card>
          </Link>
        ))}
      </SectionContent>
    </Section>
  );
}
