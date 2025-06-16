"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="container pt-6">
      <Nav navigation={navigation} />
    </header>
  );
}

function Nav({ navigation }: { navigation: { name: string; href: string }[] }) {
  const pathname = usePathname();

  return (
    <nav className="inline-flex gap-6">
      {navigation.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            href={item.href}
            key={item.name}
            className={cn(
              "text-base md:text-sm",
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
