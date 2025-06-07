import { ReactNode } from "react";
import { Highlight } from "prism-react-renderer";

type TCodeBlock = {
  children: ReactNode;
  className?: string;
};

export const CodeBlock = ({ children, className }: TCodeBlock) => {
  const extractTextContent = (node: ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }

    if (typeof node === "number") {
      return String(node);
    }

    if (Array.isArray(node)) {
      return node.map(extractTextContent).join("");
    }

    if (node && typeof node === "object" && "props" in node) {
      if (node.props && node.props.children) {
        return extractTextContent(node.props.children);
      }
    }

    return "";
  };

  const codeString = extractTextContent(children);
  const language = className?.replace(/language-/, "") || "tsx";

  return (
    <Highlight code={codeString.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span style={{ marginRight: "1em", color: "#666" }}>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
