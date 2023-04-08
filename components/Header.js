import styles from '../styles/Header.module.css'
import React, { useEffect } from 'react';
import Router from './Router';

export default function Header({ search, setSearch, color, hideSearch }) {

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

  return (
    <div id={styles.head} style={{ backgroundColor: color }}>
      <div className={styles.header}>
        <Router url='/'>
          <span id={styles.ken}>ZゼRロ</span>
        </Router>
        {!hideSearch && <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />}
      </div>
    </div>
  );
}