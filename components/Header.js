import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ product }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="Logo" />
            </a>
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/us">Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Store</Link>
            <Link href="/cart">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src="/img/carrito.png"
                  alt="Cart image"
                />
              </a>
            </Link>
          </nav>
        </div>
        {product && (
          <div className={styles.model}>
            <h2>Model: {product.name}</h2>
            <p>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <Link href={`/guitars/${product.url}`}>
              <a className={styles.linkInput}>View</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        <div className={styles.product}>
          <Image
            layout="fixed"
            width={400}
            height={1000}
            src="/img/header_guitarra.png"
            alt="image header"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
