import Image from './Image';
import styles from '../styles/FeaturePost.module.css'
import { useRouter } from 'next/router';


export default function FeaturePost({ post = {
    title: '',
    coverImage: '',
    slug: '',
    list: '',
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
                style={{ border: `2px solid ${post.color.fore}`, boxShadow: `-8px 8px 0 ${post.color.fore}` }}
                onClick={() => link(post.list + "/" + post.slug)}>
                {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                    border
                />}
                <h1
                    style={{
                        backgroundColor: post.color.bg, color: post.color.fore,
                        borderRadius: !post.coverImage && `12px`
                    }}
                    className={styles.title}>{post.title}</h1>
            </div>
            {/* </Link> */}
        </div >
    );
}