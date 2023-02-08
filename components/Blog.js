import React from 'react'
import Head from 'next/head';
import Image from './Image';
import styles from '../styles/Blog.module.css'

export default function Blog({
    post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "" }
}) {

    return (
        <article>
            <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.coverImage} />
            </Head>

            <div>
                <div key={post.slug} className={styles.container}>
                    <h1>{post.title}</h1>
                    <div className={styles.author}>by {post.author.name}</div>
                    <div className={styles.author} dateTime={post.date}>{post.date}</div>
                </div>
                <Image
                    url={post.coverImage}
                    alt={post.title}
                />
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.content }} className={styles.blog} />
        </article>
    );
}