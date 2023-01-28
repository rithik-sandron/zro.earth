import Link from 'next/link';

export default function Tips({ bg, fore, title, post =
    { content: "", date: "", slug: "", coverImage: "" }
}) {

    return (
        <div className='tip-container'
        style={{ backgroundColor: fore, color: bg }}>
            <span className='tip-head'>{title}</span>
            <span className='tip-title'>{post.content}</span>
        </div>
    )
}