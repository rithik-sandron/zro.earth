import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ posts =
    [{ title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }]
}) {
    console.log(posts)
    return (
        <div className='head-content'>
            {posts.map(post => {
                return (
                    <div key={post.slug} className='head-content-container' style={{ backgroundColor: post.bgColor }} >
                        <div className='head-content-wrap'>
                            <Link
                                as={`/posts/${post.slug}`}
                                href="/posts/[slug]" >
                                <h1 className='post'>{post.title}</h1>
                                <img src={post.coverImage} className='image' />
                            </Link>
                        </div>
                    </div>
                );
            })
            }
        </div >
    );
}