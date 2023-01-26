import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Header({ bg = '', fore = '' }) {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    useEffect(() => {
        const d = new Date();
        const year = d.getFullYear();
        const date = d.getDate();
        const dayName = days[d.getDay()];
        const monthName = months[d.getMonth()];
        const time = d.toLocaleTimeString();
        const formatted = `${dayName}, ${date} ${monthName} ${year}`;
        document.getElementById('date').innerHTML = formatted;

    }, [])

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

    useEffect(() => {
        // time
        setInterval(() => {
            const d = new Date();
            const year = d.getFullYear();
            const date = d.getDate();
            const dayName = days[d.getDay()];
            const monthName = months[d.getMonth()];
            const time = d.toLocaleTimeString();
            const formatted = `${dayName}, ${date} ${monthName} ${year}`;
            document.getElementById('date').innerHTML = formatted;
        }, 1000)
    }, []);

    return (
        <div className="flex" id='head' style={{
            backgroundColor: bg ? bg : theme ? dark : light,
            color: fore ? fore : theme ? dark : light,
        }}>
            <Head>
                <title>Zero</title>
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content={bg ? bg : theme ? dark : light} />
                <meta name="theme-color" content={bg ? bg : theme ? dark : light} />
            </Head>
            <div className='flex-item-1'>
                <Link as={`/`} href="/">
                    <span className='panel-item' id='ken'
                        style={{
                            color: fore ? fore : theme ? light : dark
                        }}>Zero.</span>
                </Link>
                <h1 id='date' className="headline" style={{
                    color: fore ? fore : theme ? light : dark
                }} />

                <span className='panel-item' onClick={switchTheme} id='face'>
                    <span id='theme'></span>
                </span>

            </div>

        </div>
    );
}