import styles from '../styles/Header.module.css'
import React, { useEffect } from 'react';
import Router from './Router';

export default function Header({ search, setSearch, color = '#555555', hideSearch }) {

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
    <div className='container'>
      <Router url='/'>
        <svg id='logo' xmlns="http://www.w3.org/2000/svg" fill={color} height="48" viewBox="0 96 960 960" width="48"><path d="M479.812 876Q372 876 306.5 790.112 241 704.224 241 576.155q0-130.673 65.688-215.414Q372.375 276 480.188 276 588 276 653.5 361.888 719 447.776 719 575.845t-65.688 214.112Q587.625 876 479.812 876Zm.188-89q71.5 0 108.25-64.106T625 576q0-82.788-36.75-146.894Q551.5 365 480 365t-108.25 64.106Q335 493.212 335 576q0 82.788 36.75 146.894Q408.5 787 480 787Z" /></svg>
        <div className='sub-container' style={{ paddingLeft: '0.4em' }} id={styles.ken}>
          <span>ZゼRロ is initiated to express our mind.</span>
        </div>


      </Router>

      <div className={styles.header}>
        <Router url='/about'>
          <span id={styles.ken}>About</span>
        </Router>
        <Router url='/tree'>
          <span id={styles.ken}>Tree</span>
        </Router>
        {/* {!hideSearch && <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />} */}
      </div>
    </div>
  );
}