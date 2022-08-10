import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
