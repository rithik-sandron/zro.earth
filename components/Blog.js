import React from 'react'
import styles from '../styles/Blog.module.css'
import Image from './Image'

export default function Blog({
    post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", color: { bg: '', fore: '' } }
}) {

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
                
            </div>
            {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />}
            <div dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}