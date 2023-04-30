
'use client';

import Router from "./Router";

export default function PostMetaData({ post }) {
    return (

        <section key={post.slug} className='sub-container'>
            <h3>{post.list}</h3>
            <h1>{post.title}</h1>
            <p>{post.gist}</p>
            <span>
                <li>{post.date}</li>
                {/* <li>{post.wc}</li> */}
            </span>
            <hr />
        </section>

    );
}