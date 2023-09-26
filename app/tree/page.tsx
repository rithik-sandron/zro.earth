import styles from '../styles/Link.module.css';
import Router from '../../components/Router';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    openGraph: {
        title: 'Link tree',
        description: 'quicks links to things we made',
        url: 'https://zro.earth/tree',
    }
};

export default function Tree() {
    return (
        <div id='widtht95' className={styles.linkTree}>
            <p style={{ textAlign: 'center' }}>Links will be updated soon..</p>
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