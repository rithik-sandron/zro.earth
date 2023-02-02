import React from 'react';
import Link from 'next/link';

export default function List({ bg = '', fore = '', posts = [
    { date: "", slug: "", list: "" }]
}) {

    const title = posts[0].list;

    return (

        <div className='list-container'>
            <div className='list-head'
                style={{
                    borderTop: `18px solid ${bg}`
                }}
            >{title}</div>
            <div className='session'>
                {posts.map(post => {

                    return (
                        <Link
                            key={post.slug}
                            style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                            as={`/${post.list}/${post.slug}`}
                            href={`/[list]/[slug]`} >
                            <div className='post-container'>
                                <div className='post-title'>{post.title}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}