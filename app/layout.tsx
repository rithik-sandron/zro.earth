import styles from './styles/Index.module.css';
import type { Metadata } from 'next';
import './styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import Router from 'components/Router';

export const metadata: Metadata = {
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
    // themeColor: [
    //     { media: '(prefers-color-scheme: light)', color: 'white' },
    //     { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
    // ],
    openGraph: {
        title: 'zro.earth',
        description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
        url: 'https://zro.earth',
        siteName: 'zro',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      twitter: {
        title: 'zro.earth',
        card: 'summary_large_image',
      },
};

export default function Main({ children }) {
    return (
        <html>
            <body>
                <main className={styles.main}>
                <section className={styles.home} >
                    <div style={{ display: 'flex', gap: '1em' }}>
                        <Router url='/'>
                            <span id={styles.item}>Home</span>
                        </Router>
                        <Router url='/about'>
                            <span id={styles.item}>About</span>
                        </Router>
                        {/* <Router url='/tree'>
                            <span id={styles.item}>Tree</span>
                        </Router> */}
                        </div>
                </section>
                    {children}
                    <Analytics />
                </main>
            </body>
        </html>
    );
}