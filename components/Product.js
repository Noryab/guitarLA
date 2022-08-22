import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Product.module.css";
const Product = ({ result }) => {
  const { description, image, name, price, url } = result;
  return (
    <div className={styles.product}>
      <Image
        layout="responsive"
        width={180}
        height={350}
        src={image.url}
        alt={`Guitar Image ${name}`}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/products/${url}`}>
          <a className={styles.link}>View Product</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
