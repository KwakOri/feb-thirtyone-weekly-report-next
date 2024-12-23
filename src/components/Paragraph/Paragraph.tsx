import React, { PropsWithChildren } from "react";

const Paragraph = ({ children }: PropsWithChildren) => {
  return <p className="text-sm md:text-md lg:text-lg font-bold">{children}</p>;
};

export default Paragraph;
