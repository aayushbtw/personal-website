import { Card } from "@/components/crafts/card";

export default function Page() {
  return (
    <div className="container">
      <h1 className="sm:text-4xl text-2xl text-balance mb-2">Card.</h1>
      <span className="text-muted-foreground">12</span>
      <article className="mt-4">
        <div className="p-20 bg-muted rounded-2xl flex items-center justify-center">
          <Card />
        </div>
      </article>
    </div>
  );
}
