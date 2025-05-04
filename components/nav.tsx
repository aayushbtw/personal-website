"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "blog", href: "/blog" },
  ];
  return (
    <nav className="inline-flex gap-6">
      {links.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            href={item.href}
            key={item.name}
            className={cn(
              "text-sm",
              isActive ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
