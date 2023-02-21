import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import PixelBlock from './PixelBLock';
import Image from './Image'

export default function Blog({
    blocks = [], post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", color: { bg: '', fore: '' } }
}) {

    useEffect(() => {
        var toc =
            `<nav role='navigation'><h3>On this page</h3><ul>`;
        let headings = document.querySelectorAll('.table-content-h1');
        if (headings.length > 3) {
            headings.forEach(heading => {
                const title = heading.innerText;
                const link = "#" + heading.id;
                const newLine = `<li><a href='${link}'>${title}</a></li>`;
                toc += newLine;
            });

            toc += `</ul></nav>`;
            let articleToc = document.getElementById('article-toc');

            articleToc.innerHTML = toc;
            articleToc.style.display = 'block';
        }
    }, []);

    return (
        <article>
            <div>
                <div key={post.slug} className={styles.container}>
                    <h1>{post.title}</h1>
                    <div className={styles.author}>
                        <div>{post.author.name},</div>
                        <div>{post.date}</div>
                    </div>
                </div>
                {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />}
            </div>
            <PixelBlock isList fore={post.color.fore} blocks={blocks} />

            <div id='article-toc' className={styles.articleToc} />
            <div id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}