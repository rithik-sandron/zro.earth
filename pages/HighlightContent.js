import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ bg = '', fore = '', posts =
    [{ title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }]
}) {


    return (
        <div className='head-content' style={{
            backgroundColor: bg,
            background:
                `conic-gradient(from 80deg at 2px 2px, #0000 75%, ${fore} 0),
            linear-gradient(90deg, ${fore} 15%, ${bg} 0 58%, #0000 10%, ${bg} 0 90%, ${fore} 0),
            conic-gradient(from 30deg at 70% 10%, ${fore} 65%, ${bg} 0)`,
            backgroundSize: `54em 64em`

        }}>
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
                            backgroundColor: bg,
                            color: fore
                        }}>{post.title}</h1>
                    </div>
                );
            })
            }
        </div >
    );
}