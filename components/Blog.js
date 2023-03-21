import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import PixelBlock from './PixelBLock';

export default function Blog({
    blocks = [], post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, content: "", wc: 0, color: { bg: '', fore: '' } }
}) {

    useEffect(() => {
        var toc =
            `<summary>On this article</summary><ul>`;
        let headings = document.querySelectorAll('.table-content-h1');
        if (headings.length > 3) {
            headings.forEach(heading => {
                const title = heading.innerText;
                const newLine = `<li><a href='#${heading.id}'>${title}</a></li>`;
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
                    <PixelBlock bg={post.color.bg} fore={post.color.fore} blocks={blocks} />
                    <h1>{post.title}</h1>
                    <div>
                        <div className={styles.date}>{post.author.name}</div>
                        <div className={styles.date}>{post.date}</div>
                        <div className={styles.date}>{post.wc}</div>
                    </div>
                </div>
                {/* {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />} */}
            </div>
            <details open id='article-toc' className={styles.articleToc} />
            <div id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}