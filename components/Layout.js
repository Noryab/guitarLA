import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page, product }) => {
  const title = `GitarLA-${page}`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Web site of Guitars" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header product={product} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  product: null,
};

export default Layout;
