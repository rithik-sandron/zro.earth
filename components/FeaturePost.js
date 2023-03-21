import styles from '../styles/FeaturePost.module.css'
import { useRouter } from 'next/router';
import blog from '../styles/Blog.module.css'


export default function FeaturePost({ post = {
    title: '',
    coverImage: '',
    gist: '',
    slug: '',
    list: '',
    wc: '',
    color: { bg: "", fore: "" },
}
}) {

    const router = useRouter();

    function link(url) { router.push(url); }

    return (
        <div className={styles.content}>
            {/* <Link
                style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                as={`/${list}/${slug}`}
                href={`/[list]/[slug]`} > */}

            <div key={post.slug} className={styles.container}
                onClick={() => link(post.list + "/" + post.slug)}>

                <div className={styles.title}>
                    <h1 style={{ textDecorationColor: post.color.bg }}
                    >{post.title}</h1>
                    <div id={styles.gist} className={blog.blog} dangerouslySetInnerHTML={{ __html: post.gist }} />
                    <div className={styles.dateContainer}> 
                        <div className={styles.date}>{post.date}</div>
                        <div className={styles.date}>{post.wc}</div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div >
    );
}