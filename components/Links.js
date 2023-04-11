import React from 'react';
import styles from '../styles/Link.module.css';
import Router from './Router';


export default function Links() {

    return (
        <section className={styles.treeContainer}>
            <div className={styles.linkTree}>
                <Router className={styles.links}>
                    Instagram
                </Router>
                <Router className={styles.links}>
                    Twitter
                </Router>
                <Router className={styles.links}>
                    Open Sea
                </Router>
            </div >
        </section >
    )
}