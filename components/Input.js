import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { formatDate } from "../helpers";
import styles from "../styles/Input.module.css";

const Input = ({ result }) => {
  const { title, description, image, published_at, url } = result;
  const [datePublished, setDatePublished] = useState("");

  useEffect(() => setDatePublished(formatDate(published_at)));

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
        <p className={styles.dateAt}>{datePublished}</p>
        <p className={styles.description}>{description}</p>

        <Link href={`/blog/${url}`}>
          <a className={styles.linkInput}>Read</a>
        </Link>
      </div>
    </article>
  );
};

export default Input;
