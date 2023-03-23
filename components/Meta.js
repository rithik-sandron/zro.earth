import Head from 'next/head';

export default function Meta({ title = '', desc = '' }) {

    return (
        <Head>
            <meta property="og:site_name" content='ZERロ' />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>{title !== '' ? title : 'ZERロ'}</title>
            <meta name="msapplication-TileColor" media="(prefers-color-scheme: light)" content={"#fff"} />
            <meta name="msapplication-TileColor" media="(prefers-color-scheme: dark)" content={"#050607"} />
            <meta name="theme-color" media="(prefers-color-scheme: light)" content={"#fff"} />
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content={"#050607"} />
            <meta property="og:title" content={title !== '' ? title : 'ZERロ'} />
            <meta
                name="description"
                content={desc !== '' ? desc :
                    'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..'}
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
        </Head>
    );
}