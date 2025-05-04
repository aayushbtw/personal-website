import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    //
    h1: (props) => (
      <h1 className="sm:text-3xl text-2xl text-balance mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="sm:text-2xl text-xl text-balance mb-4" {...props} />
    ),
    h3: (props) => (
      <h3 className="sm:text-xl text-lg text-balance mb-4" {...props} />
    ),
    h4: (props) => (
      <h4 className="sm:text-lg text-base text-balance mb-4" {...props} />
    ),
    h5: (props) => (
      <h5 className="sm:text-lg text-base text-balance mb-4" {...props} />
    ),
    h6: (props) => (
      <h6 className="sm:text-lg text-base text-balance mb-4" {...props} />
    ),
    //
    p: (props) => (
      <p
        className="text-muted-foreground leading-relaxed text-pretty mb-4"
        {...props}
      />
    ),
    //
    li: (props) => <li className="mb-4 text-muted-foreground" {...props} />,
    ul: (props) => <ul className="list-disc list-inside" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside" {...props} />,
    //
    blockquote: (props) => (
      <blockquote className="border-l-4 pl-4 my-4" {...props} />
    ),
    //
    a: (props) => <a {...props} />,
    //
    pre: (props) => (
      <pre
        className="overflow-x-auto py-4 rounded-md bg-muted my-4 [&_[data-line]]:px-4"
        {...props}
      />
    ),
    //
    hr: (props) => <hr className="my-8" {...props} />,
  };
}
