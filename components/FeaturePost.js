import Link from 'next/link';
import Image from './Image';
import styles from '../styles/FeaturePost.module.css'

export default function FeaturePost({
    title = '',
    coverImage = '',
    slug = '',
    list = '',
    bg = '',
    fore = ''
}) {

    return (
        <div className={styles.content}>
            <Link
                style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                as={`/${list}/${slug}`}
                href={`/[list]/[slug]`} >
                <div key={slug} className={styles.container}
                    style={{ border: `1px solid ${fore}`, boxShadow: `14px 14px 0 ${fore}` }}
                >
                    {coverImage && <Image
                        url={coverImage}
                        alt={title}
                    />}
                    <h1
                        style={{ backgroundColor: bg, color: fore }}
                        className={styles.title}>{title}</h1>
                </div>
            </Link>
        </div >
    );
}