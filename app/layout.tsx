import type { Metadata } from 'next';
import './styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import Router from 'components/Router';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
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
        <html lang="en" className={`${GeistSans.className}`}>
            <body>
                <main>
                    <section className="home">
                        <Router url='/'>home</Router>
                        <Router url='/about'>about</Router>
                        {/* <Router url='/tree'>tree</Router> */}
                    </section>
                    {children}
                    <Analytics />
                </main>
            </body>
        </html>
    );
}