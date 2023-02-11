import React from 'react';
import styles from '../styles/List.module.css'
import { useRouter } from 'next/router';

export default function List({ posts = [
    { date: "", slug: "", list: "" }]
}) {

    const router = useRouter();

    function link(url) { router.push(url); }

    return (
        <div className={styles.container}>
            <div className={styles.head}
                style={{ border: `2px solid ${posts[0].color.bg}`, boxShadow: `-4px 4px 0 ${posts[0].color.bg}` }}
            >{posts[0].list}</div>
            <div className={styles.list}>
                {posts.map(post => {

                    return (
                        // <Link passHref
                        //     key={post.slug}
                        //     style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                        //     as={`/${post.list}/${post.slug}`}
                        //     href={`/[list]/[slug]`} >
                        <div className={styles.post}
                            key={post.slug}
                            onClick={() => link(post.list + "/" + post.slug)}>
                            <div className={styles.title}>{post.title}</div>
                        </div>
                        // </Link>
                    )
                })}
            </div>
        </div>
    )
}