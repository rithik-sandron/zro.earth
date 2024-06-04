'use client';

export default function PostMetaData({ post, doNeedGist }) {

    return (
        <div style={{ backgroundColor: doNeedGist }}>
            <section key={post.slug} className={doNeedGist ? 'container' : 'sub-container'}>
                {doNeedGist ? <h1>{post.metadata.title}</h1> : <h3>{post.metadata.title}</h3>}
                <p style={{ textUnderlineOffset: "4px", marginTop: "1mm", fontSize: "3.2mm", color: "#555555" }}>{post.metadata.author}</p>
                <br />
                {doNeedGist && <p>{post.metadata.description}</p>}
            </section>
        </div>

    );
}