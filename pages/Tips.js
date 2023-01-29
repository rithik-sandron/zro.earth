export default function Tips({ post =
    { content: "", date: "", slug: "", coverImage: "" }
}) {

    const foreColor = '#111';
    const bgColor = '#ffe500';

    return (
        <div id= 'tip-zero' className='tip-container'
            style={{ backgroundColor: bgColor, color: foreColor }}
        >
            <span className='tip-title'>{post.content}</span>
        </div>
    )
}