import styles from '../styles/Header.module.css'
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";

export default function Header({ bg = '', fore = '', title = '' }) {

  const router = useRouter()

  function back() {
    if (router.route !== '/') router.back();
  }

  const [theme, setTheme] = useState(false);

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
        backgroundColor: bg && bg,
        color: fore && fore
      }}>
      <Head>
        <title>ZゼRロ</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content={bg ? bg : theme ? 'rgb(15, 18, 22)' : '#fff'} />
        <meta name="theme-color" content={bg ? bg : theme ? 'rgb(15, 18, 22)' : '#fff'} />
        <meta property="og:site_name" content='ZゼRロ' />
        {title && <meta property="og:title" content={title} />}

      </Head>

      <div className={styles.flexContainer}>
        {/* <Link as={`/`} href="/"
          style={{
            border: 'none', textDecoration: "none", color: 'transparent'
          }}> */}

        <span className={styles.panel} id={styles.ken}
          onClick={back}
          style={{ color: fore && fore }}
        >
          Zゼ<br />Rロ</span>
        {/* </Link> */}

        <div className={styles.switchWrapper} id={styles.face}>
          <label className={styles.switch} for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className={styles.slider} onClick={switchTheme} />
          </label>
        </div>

      </div>

    </div >
  );
}

