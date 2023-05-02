'use client';
export default function PostMetaData({ post }) {
    return (
        <section key={post.slug} className='container'>
            <h1>{post.title}</h1>
            <p>{post.gist}</p>
            <span>
                <li>{post.list}</li>
                <li>{post.date}</li>
                {/* <li>{post.wc}</li> */}
            </span>
        </section>

    );
}