import React from 'react';
import Link from 'next/link';
export default function HighlightContent({ bg, post =
    { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

    return (

        <div className='head-content' style={{ backgroundColor: bg, color: bg }}>
            <div className='head-content-container'>
                {/* <div className='hashtag-container'>
                {
                    post.tagsWithColors.map(tag => {
                        return (
                            <span style={{ color: tag.color, backgroundColor: tag.color + '30' }} className='hashtag' key={tag.tag}>{tag.tag}</span>)
                    })
                }
            </div> */}
                <Link
                    as={`/posts/${post.slug}`}
                    href="/posts/[slug]" >
                    <h1 className='post'>{post.title}</h1>
                    <img src={post.coverImage} className='image' />
                </Link>
            </div>
        </div >

    );
}