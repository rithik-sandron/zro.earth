import Router from './Router';

export default function FeaturePost({ post = {
    'title': '',
    'coverImage': '',
    'gist': '',
    'slug': '',
    'list': '',
    'wc': '',
    'color': '',
}
}) {

    return (
        <Router url={post.list + "/" + post.slug}>
            <div key={post.slug} className='container'>
                <h1>{post.title}</h1>
                <p>{post.gist}</p>
                <date>
                    <span>{post.date}</span>
                    <span>{post.wc}</span>
                </date>
            </div>
        </Router>
    );
}