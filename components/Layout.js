import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GitarLA - {page}</title>
        <meta name="description" content="Web site of Guitars" />
      </Head>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
