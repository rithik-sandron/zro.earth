import styles from '../styles/Header.module.css'
import React, { useEffect } from 'react';
import { useRouter } from "next/router";


export default function Header({ search, setSearch }) {

  function setIsDarkTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", 'dark');
    } else {
      document.documentElement.setAttribute("data-theme", 'light');
    }
  }

  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-theme", 'dark');
    } else {
      document.documentElement.setAttribute("data-theme", 'light');
    }
    darkTheme.addEventListener('change', setIsDarkTheme);
    return () => darkTheme.removeEventListener('change', setIsDarkTheme);
  }, []);

  const router = useRouter();

  function back() {
    if (router.route !== '/') router.push('/');
  }

  function about() {
    if (router.route !== '/about') router.push('/about');
  }

  return (
    <div className={styles.flex} id={styles.head}>
      <div className={styles.flexContainer}>

        <span className={styles.panel} id={styles.ken}
          onClick={back}>
          Zゼ<br />Rロ
        </span>

        <input className={styles.search} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />

        <span className={styles.panel} id={styles.face}
          onClick={about}>About
        </span>
      </div>
    </div>
  );
}