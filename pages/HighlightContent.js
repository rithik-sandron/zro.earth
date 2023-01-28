import React from 'react';
import Link from 'next/link';
export default function HighlightContent({
    bg = '',
    fore = '',
    title = '',
    coverImage = '',
    slug = '',
    list = ''
}) {

    return (
        <div className='head-content'
            style={{
                backgroundColor: bg
            }}
        >
            <Link
                style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                as={`/posts/${post.slug}`}
                href={`/posts/[slug]`} >
                <div key={post.slug} className='head-content-container'>

                    <img src={coverImage} className='image' alt='coverImage'
                        style={{ border: `1px solid ${fore}`, boxShadow: `12px 12px 0 ${fore}` }}
                    />
                    <h1 className='post' style={{
                        color: fore,
                    }}>{title}</h1>
                </div>
            </Link>

        </div >
    );
}