'use client';

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

    // useEffect(() => {
    //     var toc = `<summary>On this article</summary><ul>`;
    //     let headings = document.querySelectorAll('.table-content-h1');
    //     if (headings.length > 3) {
    //         headings.forEach(heading => {
    //             const title = heading.innerText;
    //             const newLine = `<li><a href='#${heading.id}'>${title}</a></li>`;
    //             toc += newLine;
    //         });

    //         toc += `</ul>`;
    //         let articleToc = document.getElementById('article-toc');

    //         articleToc.innerHTML = toc;
    //         articleToc.style.display = 'block';
    //     }
    // }, []);

    return (
        <article>
            <section key={post.slug} className='container'>
                <h3>{post.list}</h3>
                <h1>{post.title}</h1>
                <p>{post.gist}</p>
                <br />
                <date>
                    <span>{post.date}</span>
                    <span>{post.wc}</span>
                </date>
                <hr />
            </section>
            {/* <details open id='article-toc' className={styles.articleToc} /> */}
            <section id='article' dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}