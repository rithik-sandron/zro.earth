import styles from '../styles/Header.module.css'
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

export default function Header({ bg = '', fore = '', title = 'Zero', coverImage = '' }) {

  const router = useRouter()

  function back() {
    if (router.route !== '/') router.back();
  }

  const [theme, setTheme] = useState(false);

  const dark = '#000';
  const light = '#fff';

  function switchTheme() {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "dark");

    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    const func = async () => {
      setTheme((theme) => !theme);
    }

    func();
  }

  return (
    <div className={styles.flex} id={styles.head}
      style={{
        backgroundColor: bg ? bg : theme ? dark : light,
        color: fore ? fore : theme ? dark : light

      }}>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content={bg ? bg : theme ? dark : light} />
        <meta name="theme-color" content={bg ? bg : theme ? dark : light} />
        {coverImage && <meta property="og:image" content={coverImage} />}
      </Head>

      <div className={styles.flexContainer}
      >
        {/* <Link as={`/`} href="/"
          style={{
            border: 'none', textDecoration: "none", color: 'transparent'
          }}> */}

        <span className={styles.panel} id={styles.ken}
          onClick={back}
          style={{ color: fore ? fore : theme ? light : dark }}
        >
          Zゼ<br />Rロ</span>
        {/* </Link> */}

        <span className={styles.panel} onClick={switchTheme} id={styles.face}>
          <span id={styles.theme}></span>
        </span>

      </div>

    </div>
  );
}

