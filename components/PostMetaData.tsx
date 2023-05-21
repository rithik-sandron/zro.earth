'use client';
export default function PostMetaData({ post, doNeedGist }) {
    return (
        <section key={post.slug} className='container'>
            {doNeedGist ? <h1>{post.title}</h1> : <h2>{post.title}</h2>}
            {doNeedGist && <p>{post.gist}</p>}
            <span>
                <li>{post.list}</li>
                <li>{post.date}</li>
                {doNeedGist && <hr />}
            </span>
            {!doNeedGist && <hr />}
        </section>

    );
}