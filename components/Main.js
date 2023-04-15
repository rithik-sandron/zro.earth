'use client';

import Router from './Router';
import Meta from './Meta';
import styles from '../styles/Index.module.css';

export default function Main({ grad, search, children, setSearch }) {

    const title = 'Zero';
    const desc = 'app';

    return (
        <main>
            <div style={{
                background: `linear-gradient(to bottom,
        transparent,
        ${grad})`
            }}>
                <div className={styles.main}>
                    <Meta title={title} desc={desc} />
                    <section className={styles.home}>
                        <Router url='/'>
                            <span id={styles.logo}>Zero</span>
                        </Router>
                        <Router url='/about'>
                            <span id={styles.ken}>About</span>
                        </Router>
                        <Router url='/tree'>
                            <span id={styles.ken}>Tree</span>
                        </Router>
                        <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </section>
                    {children}
                </div>
            </div>
        </main>
    );
}