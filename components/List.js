import React from 'react';
import Link from 'next/link';
import styles from '../styles/List.module.css'

export default function List({ bg = '', fore = '', posts = [
    { date: "", slug: "", list: "" }]
}) {

    const title = posts[0].list;

    return (

        <div className={styles.container}>
            <div className={styles.head}
                style={{
                    borderTop: `18px solid ${bg}`
                }}
            >{title}</div>
            <div className={styles.list}>
                {posts.map(post => {

                    return (
                        <Link passHref
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