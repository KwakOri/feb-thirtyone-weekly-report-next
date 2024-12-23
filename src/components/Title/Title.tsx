import React, { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return <p className="text-sm md:text-md lg:text-lg">{children}</p>;
};

export default Title;
