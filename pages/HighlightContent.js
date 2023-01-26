import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ bg = '', fore = '', post =
    { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {


    return (
        <div className='head-content' style={{
            backgroundColor: bg
        }}>
            <Link
                as={`/posts/${post.slug}`}
                href="/posts/[slug]" >
                <div key={post.slug} className='head-content-container'>

                    <img src={post.coverImage} className='image' alt='coverImage'
                        style={{ border: `1px solid ${fore}`, boxShadow: `12px 12px 0 ${fore}` }} />
                    <h1 className='post' style={{
                        color: fore,
                    }}>{post.title}</h1>
                </div>
            </Link>

        </div >
    );
}