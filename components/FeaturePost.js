import Link from 'next/link';
import Image from './Image';
import styles from '../styles/FeaturePost.module.css'

export default function FeaturePost({
    title = '',
    coverImage = '',
    slug = '',
    list = ''
}) {

    return (
        <div className={styles.content}>
            <Link passHref
                style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                as={`/${list}/${slug}`}
                href={`/[list]/[slug]`} >
                <div key={slug} className={styles.container}
                    style={{ border: `1px solid`, boxShadow: `14px 14px 0` }}
                >
                    <Image
                        url={coverImage}
                        alt={title}
                    />
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </Link>
        </div >
    );
}