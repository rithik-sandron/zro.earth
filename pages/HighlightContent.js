import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ bg, post =
    { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

    return (

        <div className='head-content' style={{ backgroundColor: bg, color: bg }}>
            <div className='head-content-container'>
                {/* <h1 id='logo'>0</h1> */}
                <div className='head-content-wrap'>
                <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]" >
                    <h1 className='post'>{post.title}</h1>
                    <img src={post.coverImage} className='image' />
                </Link>
                </div>
            </div>
        </div >

    );
}