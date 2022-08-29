import React from "react";
import Input from "./Input";
import styles from "../styles/Blog.module.css";

const ListBlog = ({ results }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {results.map((result) => (
          <Input key={result.id} result={result} />
        ))}
      </div>
    </>
  );
};

export default ListBlog;
