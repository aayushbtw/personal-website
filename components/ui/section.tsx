import { cn } from "@/lib/utils";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="section"
      className={cn("container flex flex-col sm:gap-4 gap-2", className)}
      {...props}
    />
  );
}

export function SectionTitle({
  className,
  ...props
}: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="section-title"
      className={cn("sm:text-xl text-lg text-balance", className)}
      {...props}
    />
  );
}

export function SectionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="section-content" className={cn(className)} {...props} />
  );
}
