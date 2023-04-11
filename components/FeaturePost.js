'use client';

import Router from './Router';

export default function FeaturePost({ post = {
    'title': '',
    'coverImage': '',
    'gist': '',
    'slug': '',
    'list': '',
    'wc': '',
    'color': '',
}
}) {

    return (
        <Router url={post.list + "/" + post.slug}>
            <section key={post.slug} className='container'>
                <h1>{post.title}</h1>
                <p>{post.gist}</p>
                <date>
                    <h3>{post.list}</h3>
                    <span>{post.date}</span>
                    <span>{post.wc}</span>
                </date>
                <hr />
            </section>
        </Router>
    );
}