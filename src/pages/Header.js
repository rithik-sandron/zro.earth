import React, { memo, useState } from 'react';
import '../App.css';

export default memo(function Header() {

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
        <div className='header'>
            <span className='panel-item'>Ken</span>
            <span className='panel-item' onClick={switchTheme} id='face'>Light</span>
        </div>
    )
});