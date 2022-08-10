import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/NoFound.module.css";

const NoFound = () => {
  return (
    <Layout>
      <div className={styles.noFound}>
        <h1 className="heading"> Page no found</h1>

        <Link href="/">
          <a>Return to home</a>
        </Link>
      </div>
    </Layout>
  );
};

export default NoFound;
