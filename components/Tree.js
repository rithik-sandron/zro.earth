import React from 'react';
import styles from '../styles/Link.module.css';
import Router from './Router';


export default function Tree({ color }) {

    return (
        <div className={styles.treeContainer} style={{ backgroundColor: color }}>
            <div className={styles.linkTree} >
                <Router url='/about' className={styles.links}>
                    About
                </Router>
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
        </div >
    )
}