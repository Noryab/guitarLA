import Image from "next/image";
import Link from "next/link";

import React from "react";
import { formatDate } from "../helpers";
import styles from "../styles/Input.module.css";

const Input = ({ result }) => {
  const { title, description, content, image, published_at, id } = result;

  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`blog image ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.dateAt}>{formatDate(published_at)}</p>
        <p className={styles.description}>{description}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.linkInput}>Read</a>
        </Link>
      </div>
    </article>
  );
};

export default Input;
