import React from "react";

interface SpanProps {
  label: string;
  additionalStyle?: string;
}

const Span: React.FC<SpanProps> = ({ label, additionalStyle }) => {
  const defaultStyle = "text-blue-300 font-semibold p-4 " + additionalStyle;

  return <span className={defaultStyle}>{label}</span>;
};

export default Span;
