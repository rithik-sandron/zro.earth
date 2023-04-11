'use client';
import Head from 'next/head';

export default function Meta({ title = '', desc = '' }) {
    return (
        <Head>
            <title>{title !== '' ? title : 'Zro'}</title>
            <meta property="og:site_name" content='ZERロ' />
            <meta property="og:url" content="https://zro.earth/" />
            <meta
                name="description"
                content={desc !== '' ? desc :
                    'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..'}
            />
            <meta property="og:title" content={title !== '' ? title : 'Zro'} />
            <meta name="apple-mobile-web-app-title" content="Zro" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="msapplication-TileColor" media="(prefers-color-scheme: light)" content={"#fff"} />
            <meta name="msapplication-TileColor" media="(prefers-color-scheme: dark)" content={"#050607"} />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content={'#fff'} />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content={'#050607'} />
            <link rel="preload" as="style" href="css/global.css" />
            {/* <link rel="shortcut icon" href="/favicon/favicon.ico" disabled media=/> */}
        </Head>
    );
}