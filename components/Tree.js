import React from 'react';
import styles from '../styles/Link.module.css';
import Router from './Router';


export default function Tree({ color }) {

    return (
        <div className={styles.treeContainer} style={{ backgroundColor: color }}>
            <div className={styles.linkTree} >
                <Router url='/about'>
                    About
                </Router>
                <div className={styles.links}>
                    <span>Instagram</span>
                </div>

                <div className={styles.links}>
                    <span>Twitter</span>
                </div>

                <div className={styles.links}>
                    <span>open Sea</span>
                </div>
            </div >
        </div >
    )
}