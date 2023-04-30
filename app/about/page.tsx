'use clinet'

import type { Metadata } from 'next';
import styles from '../styles/About.module.css';

export const metadata: Metadata = {
    title: 'About ZRO',
    description: 'ZRO is initiated to express our mind.',
};

export default function About() {
    return (
        <div className={styles.about}>
            <br />
            <br />
            <h1>ZゼRロ is initiated to express our mind.</h1>
            <br />
            <h3>The name Zero (ゼロ in Japanese)
                indicates the starting point of us. We started from 0.
            </h3>
            <br />
            <br />

            <p>
                You can find certain words in Japanese because we watch a lot of Anime and we like using them, not that we know Japanese. 😅
            </p>
            <p>
                We are a group of 2 who likes researching topics 🔎 & writing ✍️ about them.
                The articles you find here are purely based on our perception. 🧠
            </p>

            <hr />

            <h2>We write about</h2>
            <ul >
                <li>Any news we find interesting.</li>
                <li>Extensively researched or fun topics we find in web.</li>
                <li>Anime.</li>
                <li>Movies & shows.</li>
                <li>Games.</li>
                <li>code.</li>
                <li>Fan Fictions.</li>
                <li>Food.</li>
            </ul>

            <hr />

            <h2>Tip us</h2>
            <p>
                If you notice any mistakes or alter view, kindly inform us.
                If you want a topic to be researched and written about, you can contact us.
                We will be creating a window to contact us through social media.
            </p>

            <hr />

            <h2 id='p'>Privacy Policy</h2>
            <p>
                We do not collect any sort of data. Even the dark theme is based on your system theme.
                We do not store anything in browser storage.
            </p>

            <p>Made with love ♡ and passion 🔥 for writing.</p>
        </div>
    )
}