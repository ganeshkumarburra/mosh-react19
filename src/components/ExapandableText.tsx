import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}
const ExapandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  if (children.length <= maxChars) return <p>{children}</p>;

  const [expanded, setExpanded] = useState(false);
  const text = expanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}
      {!expanded && <span>...</span>}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExapandableText;
