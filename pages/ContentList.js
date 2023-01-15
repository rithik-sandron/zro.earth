
import React from 'react';
import Link from 'next/link'

export default function ContentList({ posts = [] }) {

    return (
        <div className='content-list-container blog'>
            {
                posts.map(x => {
                    return (
                        <Link key={x.slug}
                            as={`/posts/${x.slug}`}
                            href="/posts/[slug]"
                        >
                            <div className='hashtag-container'>
                                {
                                    x.tagsWithColors.map(tag => {
                                        return (
                                            <span style={{ color: tag.color, backgroundColor: tag.color+'30' }} className='hashtag' key={tag.tag}>{tag.tag}</span>)
                                    })
                                }
                            </div>
                            <div className='content-list-item'>
                                <time className='post'>{x.date}</time>
                                <span className='post'>{x.title}</span>
                            </div>
                        </Link>
                    );
                })
            }
        </div>
    );
}