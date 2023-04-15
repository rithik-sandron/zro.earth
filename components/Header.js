'use client';

import styles from '../styles/Layout.module.css'
import Router from './Router';

export default function Header() {

  return (
    <section className='container'>
      <div className={styles.header}>
        <Router url='/'>
          <span id={styles.logo}>Zro</span>
        </Router>
        <Router url='/about'>
          <span id={styles.ken}>About</span>
        </Router>
        <Router url='/tree'>
          <span id={styles.ken}>Tree</span>
        </Router>
      </div>
    </section>
  );
}