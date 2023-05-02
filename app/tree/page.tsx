'use client';
import styles from '../styles/Link.module.css';
import Router from '../../components/Router';

export default function Tree() {
    return (
        <div id='widtht95' className={styles.linkTree}>
            <Router className={styles.links} url=''>
                Instagram
            </Router>
            <Router className={styles.links} url=''>
                Twitter
            </Router>
            <Router className={styles.links} url=''>
                Open Sea
            </Router>
        </div >
    );
}