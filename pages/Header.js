import React, { useState } from 'react';

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

    const d = new Date();
    const year = d.getFullYear();
    const date = d.getDate();
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const formatted = `${dayName}, ${date} ${monthName} ${year}`;

    const [theme, setTheme] = useState(false);

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

    return (
        <div className="flex">
            <div className='header'>
                <span className='panel-item'>Ken</span>
                <span className='panel-item' onClick={switchTheme} id='face'>Light</span>
            </div>
            <div className='flex-item-1'>
                <span className="headline">{formatted}</span>
            </div>

        </div>
    );
}





