'use client';

import styles from '../styles/Header.module.css'
import Router from './Router';

export default function Header({ search, setSearch, hideSearch, bgColor = false }) {

  return (
    <section className='container'>
      <div className={styles.header}>
        <Router url='/'>
          <span className={!bgColor && styles.grad} id={styles.logo}>Zro</span>
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