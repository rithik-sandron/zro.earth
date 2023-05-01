'use client';
export default function PostMetaData({ post }) {
    return (
        <section key={post.slug} className='container'>
            <h3>{post.list}</h3>
            <h1>{post.title}</h1>
            <p>{post.gist}</p>
            <span>
                <li>{post.date}</li>
                {/* <li>{post.wc}</li> */}
            </span>
        </section>

    );
}