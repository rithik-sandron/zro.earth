'use client';

export default function PostMetaData({ post, doNeedGist }) {

    return (
        <div style={{ backgroundColor: doNeedGist && post.color }}>
            <section key={post.slug} className={doNeedGist ? 'container' : 'sub-container'}>
                <span>
                    <li>{post.list}</li>
                </span>
                {doNeedGist ? <h1>{post.title}</h1> : <h3>{post.title}</h3>}
                {doNeedGist && <p>{post.gist}</p>}
            </section>
        </div>

    );
}