import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import PixelBlock from './PixelBLock';
import Image from './Image'

export default function Blog({
    blocks = [], post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", color: { bg: '', fore: '' } }
}) {

    useEffect(() => {
        var toc =
            `<nav role='navigation'><h3>Table of contents</h3><ul>`;
        document.querySelectorAll('.table-content-h1').forEach(heading => {
            const title = heading.innerText;
            const link = "#" + heading.id;

            const newLine = `<li style="list-style: none; margin:0; margin-top: 0.4em;font-size: 0.92em"><a href='${link}'>${title}</a></li>`;

            toc += newLine;
        });

        toc += `</ul></nav>`;

        document.getElementById('article-toc').innerHTML = toc;
    }, []);

    return (
        <article>
            <div
                style={{ backgroundColor: post.color.bg, color: post.color.fore }}
            >
                <div key={post.slug} className={styles.container}>
                    <h1>{post.title}</h1>
                    <div className={styles.author}
                        style={{ color: post.color.fore }}>
                        <div>{post.author.name},</div>
                        <div>{post.date}</div>
                    </div>
                </div>
                <PixelBlock bg={post.color.bg} fore={post.color.fore} blocks={blocks} />
                {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />}
            </div>
            <div style={{ margin: '0', width: '100%' }} id='article-toc' className={styles.blog} />
            <div id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}