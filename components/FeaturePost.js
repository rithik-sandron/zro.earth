import Image from './Image';
import styles from '../styles/FeaturePost.module.css'
import { useRouter } from 'next/router';
import PixelBlock from './PixelBLock';


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
                style={{ border: `1px solid ${post.color.fore}`, borderTop: 'none', boxShadow: `14px 14px 0 ${post.color.fore}` }}
                onClick={() => link(post.list + "/" + post.slug)}>

                {post.coverImage && <Image
                    url={post.coverImage}
                    alt={post.title}
                />}
               <PixelBlock bg={post.color.bg} fore={post.color.fore}/>
                <h1
                    style={{
                        backgroundColor: post.color.bg, color: post.color.fore
                    }}
                    className={styles.title}>{post.title}</h1>
            </div>
            {/* </Link> */}
        </div >
    );
}