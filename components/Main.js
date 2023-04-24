'use client';

import Router from './Router';
import Meta from './Meta';
import styles from '../styles/Index.module.css';

export default function Main({ search, children, isSearch, setSearch, title, desc }) {

    title === '' && 'Zero';
    desc === '' && 'app';

    return (
        <main>
            <div>
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
                        {isSearch && <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />}
                    </section>
                    {children}
                </div>
            </div>
        </main>
    );
}