import { CodeBlock } from "./CodeBlock";

const MDXComponents = {
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mt-6 mb-6" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-5 mb-5" {...props} />
  ),
  p: (props: any) => <p className="text-base leading-7 mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4" {...props} />
  ),
  li: (props: any) => <li className="ml-5" {...props} />,
  img: (props: any) => (
    <img className="w-full max-w-2xl mx-auto my-4" {...props} />
  ),
  pre: ({ children, ...props }: any) => {
    return <CodeBlock>{children.props.children}</CodeBlock>;
  },
};

export default MDXComponents;
