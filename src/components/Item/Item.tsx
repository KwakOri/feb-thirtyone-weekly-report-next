import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";

interface ItemProps {
  title: string;
  description: string | undefined;
}

const Item = ({ title, description }: ItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default Item;
