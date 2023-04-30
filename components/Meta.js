'use client';
import Head from 'next/head';
export default function Meta({ title = '', desc = '' }) {

    const dark = 'rgb(17, 15, 16)';
    const light = 'rgb(245, 240, 239)';
    return (
        <Head>
            <title>{title !== '' ? title : 'Zro'}</title>
            <meta property="og:site_name" content='Zro' />
            <meta property="og:url" content="https://zro.earth/" />
            <meta
                name="description"
                content={desc !== '' ? desc :
                    'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..'}
            />
            <meta property="og:title" content={title !== '' ? title : 'Zro'} />
            <meta name="apple-mobile-web-app-title" content="Zro" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="preload" as="style" href="css/global.css" />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="rgb(245, 240, 239)" />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="rgb(17, 15, 16)" />
            {/* <meta name="theme-color" content={color} /> */}
            {/* <link rel="shortcut icon" href="/favicon/favicon.ico" disabled media=/> */}
        </Head>
    );
}