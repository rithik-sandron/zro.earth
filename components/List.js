import React from 'react';
import styles from '../styles/List.module.css'
import PixelBlock from './PixelBLock';
import { useRouter } from 'next/router';

export default function List({ posts = [
    { date: "", slug: "", list: "", 'color': { bg: "", fore: "" }, }]
}) {

    const router = useRouter();

    function link(url) { router.push(url); }

    function getRandomArb(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    return (
        <div className={styles.container}>
            <div className={styles.headingTitleContainer}>
                <div className={styles.head}
                    style={{ color: posts[0].color.fore }}
                >{posts[0].list}</div>
                <PixelBlock bg={posts[0].color.bg} fore={posts[0].color.fore} />

            </div>
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
                            <div className={styles.titleBefore}
                                style={{ backgroundColor: posts[0].color.fore }}
                            />
                            <div className={styles.title}>{post.title}</div>
                        </div>
                        // </Link>
                    )
                })}
            </div>
        </div>
    )
}