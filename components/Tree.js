import React from 'react';
import styles from '../styles/Link.module.css';
import { useRouter } from "next/router";
import Router from './Router';


export default function Tree({ color }) {

    const router = useRouter();

    function about() {
        if (router.route !== '/about') router.push('');
    }

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