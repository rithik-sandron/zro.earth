import styles from './styles/Index.module.css';
import Router from '../components/Router';
import type { Metadata } from 'next';
import './styles/global.css';

export const metadata: Metadata = {
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
    ],
    openGraph: {
        title: 'zro.earth',
        description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
        url: 'https://zro.earth',
    }
};

export default function Main({ children }) {
    return (
        <html>
            <body>
                <main className={styles.main}>

                    <section className={styles.home}>
                        <Router url='/'>
                            <span id={styles.logo}>zro. 🌍</span>
                        </Router>
                        <div id={styles.line}/>
                        <Router url='/about'>
                            <span id={styles.item}>About</span>
                        </Router>
                        <Router url='/tree'>
                            <span id={styles.item}>Tree</span>
                        </Router>
                    </section>
                    {children}
                </main>
            </body>
        </html>
    );
}