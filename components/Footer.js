'use client';

import styles from '../styles/Footer.module.css'
import Router from './Router';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <span>Copyright © 2023 zro.earth, All rights reserved.</span>
            <Router url='/about#p'>Privacy Policy</Router>
        </section>
    );
}