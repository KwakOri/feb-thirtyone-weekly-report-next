import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  <div className="w-full h-full flex justify-center fixed inset-0 overflow-hidden">
    <section className="h-full w-full flex flex-col max-w-[600px] relative bg-white">
      <div className="w-full h-full overflow-y-scroll bg-white">{children}</div>
    </section>
  </div>;
};

export default Layout;
