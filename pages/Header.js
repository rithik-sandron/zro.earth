import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Header({ bg = '', fore = '' }) {

    const [theme, setTheme] = useState(false);

    const dark = '#000';
    const light = '#fff';

    function switchTheme() {
        if (!theme) {
            document.documentElement.setAttribute("data-theme", "dark");

        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }

        const func = async () => {
            setTheme((theme) => !theme);
        }

        func();
    }

    return (
        <div className="flex" id='head'
            style={{
                backgroundColor: bg, color: fore
            }}>
            <Head>
                <title>Zero</title>
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content={bg ? bg : theme ? dark : light} />
                <meta name="theme-color" content={bg ? bg : theme ? dark : light} />
            </Head>
            <div className='flex-item-1'

            >
                <Link as={`/`} href="/"
                    style={{
                        border: 'none', textDecoration: "none", color: 'transparent'
                    }}
                >
                    <span className='panel-item' id='ken'
                        style={{
                            color: fore
                        }}>Zero</span>
                </Link>

                <span className='panel-item' onClick={switchTheme} id='face'>
                    <span id='theme'></span>
                </span>

            </div>

        </div>
    );
}