
import React from 'react';
import Link from 'next/link'

export default function ContentList({
    posts = [{ title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }] }) {

    return (
        <div className='content-list-container blog'>
            {
                posts.map(x => {
                    return (
                        <div key={x.slug}>
                            <div className='hashtag-container'>
                                {

                                    x.tagsWithColors.map(tag => {
                                        return (

                                <span style={{ color: tag.color, backgroundColor: tag.color + '30' }} className='hashtag' key={tag.tag}>{tag.tag}</span>)
                                    })
                                }
                            </div>
                            <Link
                                as={`/posts/${x.slug}`}
                                href="/posts/[slug]"
                            >
                                <div className='content-list-item'>
                                    <time className='post'>{x.date}</time>
                                    <span className='post'>{x.title}</span>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}