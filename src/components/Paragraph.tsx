import React from "react";

interface ParaProps {
  label: string;
}

const Paragraph: React.FC<ParaProps> = ({ label }) => {
  const style = "bg-white";

  return <p className={style}>{label}</p>;
};

export default Paragraph;
