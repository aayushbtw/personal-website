export function Card({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className="group no-underline flex justify-between items-center border-l-2 border-transparent hover:border-border pl-0 hover:pl-2 transition-all duration-300"
      {...props}
    />
  );
}

export function CardHeader({ ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" {...props} />;
}

export function CardTitle({ ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="card-title"
      className="flex items-center gap-1 font-medium text-primary-foreground mb-1 leading-none"
      {...props}
    />
  );
}

export function CardDescription({ ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className="text-muted-foreground"
      {...props}
    />
  );
}
