
import React from "react";
import styles from '../styles/List.module.css'

export default function Tips({ post =
    { title: "", date: "", slug: "", coverImage: "", color: { bg: '', fore: '' } }
}) {

    return (
        <div className={styles.container}
            style={{ display: 'flex', flexDirection: 'column', backgroundColor: post.color.bg, color: post.color.fore }}
        >
            <span className={styles.tipTitle}>Today&apos;s Tip</span>
            <span className={styles.tipContent}>{post.title}</span>
        </div>
    )
}