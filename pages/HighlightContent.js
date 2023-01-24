import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ bg, fore, posts =
    [{ title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }]
}) {
    console.log('called')
    return (
        <div className='head-content' style={{ backgroundColor: bg }}>
            {posts.map(post => {
                return (
                    <div key={post.slug} className='head-content-container'>
                        <Link
                            as={`/posts/${post.slug}`}
                            href="/posts/[slug]" >
                            <img src={post.coverImage} className='image' alt='coverImage'
                                style={{ border: `0.5px solid ${fore}`, boxShadow: `4px 10px 27px ${fore.substring(0, fore.length - 1)},0.5)` }} />
                        </Link>
                        <h1 className='post' style={{
                            color: fore
                        }}>{post.title}</h1>
                    </div>
                );
            })
            }
        </div >
    );
}