'use client';

export default function PageMetaData({ post, doNeedGist }) {

    return (
        <div style={{ backgroundColor: doNeedGist }}>
            <section key={post.slug} className={'container'} style={{margin: "18mm 0 2mm 0"}}>
                {doNeedGist ? <h1>{post.metadata.title}</h1> : <h3>{post.metadata.title}</h3>}
            </section>
        </div>

    );
}