import React from "react";
import Nav from "./common/nav";
import Footer from "./common/footer";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
