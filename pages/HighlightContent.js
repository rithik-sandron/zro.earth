import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ post =
    { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "" }
}) {

    return (
        <Link
            as={`/posts/${post.slug}`}
            href="/posts/[slug]" >
            <div className='head-content'>
                {/* <time className='post'>{post.date}</time> */}
                <h1 className='post'>{post.title}</h1>
                <img src={post.coverImage} className='image' />
            </div>
        </Link>

    );
}