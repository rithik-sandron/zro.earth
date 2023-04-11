'use client';

import styles from '../styles/Header.module.css'
import { useEffect } from 'react';
import Router from './Router';

export default function Header({ search, setSearch, hideSearch, bgColor = false }) {

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
    <section className='container'>
      <div className={styles.header}>
        <Router url='/'>
          <span className={!bgColor && styles.grad} id={styles.logo}>0</span>
        </Router>

        <Router url='/about'>
          <span id={styles.ken}>About</span>
        </Router>
        <Router url='/tree'>
          <span id={styles.ken}>Tree</span>
        </Router>
        {!hideSearch && <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />}

      </div>
    </section>
  );
}