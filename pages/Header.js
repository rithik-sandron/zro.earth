import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Header() {

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
        const formatted = `${dayName}, ${date} ${monthName} ${year} <br /> ${time}`;
        document.getElementById('date').innerHTML = formatted;

    }, [])

    const [theme, setTheme] = useState(false);

    const dark = '#000';
    const light = '#fff';

    function switchTheme() {
        if (!theme) {
            document.documentElement.setAttribute("data-theme", "dark");
            let face = document.querySelector("#face");
            face.innerHTML = "Dark";

        } else {
            document.documentElement.setAttribute("data-theme", "light");
            let face = document.querySelector("#face");
            face.innerHTML = "Light";
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
            const formatted = `${dayName}, ${date} ${monthName} ${year} <br /> ${time}`;
            document.getElementById('date').innerHTML = formatted;
        }, 1000)
    }, []);

    return (
        <div className="flex">
            <Head>
                <title>Ken</title>
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content={theme ? dark : light} />
            </Head>
            <div className='flex-item-1'>
                <h1 id='date' className="headline" />
                <Link as={`/`} href="/">
                    <span className='panel-item'>Ken</span>
                </Link>
                <span className='panel-item' onClick={switchTheme} id='face'>Light</span>

            </div>

        </div>
    );
}





