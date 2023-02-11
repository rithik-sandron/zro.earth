import React from 'react';
import Link from 'next/link';
import styles from '../styles/List.module.css'

export default function List({ posts = [
    { date: "", slug: "", list: "" }]
}) {

    return (
        <div className={styles.container}>
            <div className={styles.head}
                style={{
                    borderBottom: `0.4em solid ${posts[0].color.bg}`
                }}
            >{posts[0].list}</div>
            <div className={styles.list}>
                {posts.map(post => {

                    return (
                        <Link
                            key={post.slug}
                            style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                            as={`/${post.list}/${post.slug}`}
                            href={`/[list]/[slug]`} >
                            <div className={styles.post}>
                                <div className={styles.title}>{post.title}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}