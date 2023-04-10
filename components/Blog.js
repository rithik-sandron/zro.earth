import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'

export default function Blog({ post = {
    'title': "",
    'date': "",
    'slug': "",
    'author': { name: "", picture: "" },
    'content': "",
    'wc': 0,
    'color': ''
}
}) {

    useEffect(() => {
        var toc = `<summary>On this article</summary><ul>`;
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
                <div key={post.slug} className='sub-container'
                    style={{
                        margin: '0 auto 2em auto',
                        padding: '0 0 1.4em 1em',
                    }}>
                    <h3>{post.list}</h3>
                    <h1 >{post.title}</h1>
                    <date>
                        <span>{post.author.name}</span>
                        <span>{post.date}</span>
                        <span>{post.wc}</span>
                    </date>
                </div>
            </div>
            <details open id='article-toc' className={styles.articleToc} />
            <div id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}