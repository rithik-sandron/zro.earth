'use client';

export default function PostMetaDataHome({ post, doNeedGist }) {

    return (
        <div style={{ backgroundColor: doNeedGist }}>
            <section key={post.slug} className={doNeedGist ? 'container' : 'sub-container'}>
                {/* <p style={{ fontSize: "3.6mm", marginBottom: "2mm", color: "#555555" }}>{post.list}</p> */}
                {doNeedGist ? <h1>{post.title}</h1> : <h3>{post.title}</h3>}
                <p style={{ textUnderlineOffset: "4px", marginTop: "1mm", fontSize: "3.6mm", color: "#555555" }}>{post.author}</p>
                {doNeedGist && (<><br /><p>{post.gist}</p></>)}

            </section>
        </div>

    );
}