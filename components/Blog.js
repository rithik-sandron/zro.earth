import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import PixelBlock from './PixelBLock';
import Image from './Image'

export default function Blog({
    blocks = [], post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, content: "", lines: 0, color: { bg: '', fore: '' } }
}) {

    useEffect(() => {
        var toc =
            `<summary>On this page</summary><ul>`;
        let headings = document.querySelectorAll('.table-content-h1');
        if (headings.length > 3) {
            headings.forEach(heading => {
                const title = heading.innerText;
                const link = "line-" + heading.id;
                const newLine = `<li><a href='${link}'>${title}</a></li>`;
                toc += newLine;
            });

            toc += `</ul>`;
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
                        <div>{post.author.name}</div>
                        <div>{post.date}</div>
                        <div style={{ marginTop: '2px' }}> ☕️ {Math.round(post.lines * 5 / 60)} min read</div>
                    </div>

                </div>
                {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />}
            </div>
            <PixelBlock isList fore={post.color.fore} blocks={blocks} />

            <details open id='article-toc' className={styles.articleToc}>

            </details>
            <div id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}