import Link from 'next/link';

export default function List({ posts = [
    { title: "", date: "", slug: "", coverImage: "" }]
}) {

    const title = posts[0].list

    return (

        <div className='list-container'>
            <div className='list-head'>{title}</div>
            {posts.map(post => {

                return (<Link
                    key={post.slug}
                    style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                    as={`/posts/${post.list + "/" + post.slug}`}
                    href={`/posts/${post.list}/[slug]`} >
                    <div className='post-title'>{post.title}</div>
                </Link>)
            })}
        </div>
    )
}