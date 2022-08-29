import React from "react";
import Product from "./Product";
import styles from "../styles/List.module.css";

const List = ({ results }) => {
  return (
    <div className={styles.list}>
      {results.map((result) => (
        <Product key={result.url} result={result} />
      ))}
    </div>
  );
};

export default List;
