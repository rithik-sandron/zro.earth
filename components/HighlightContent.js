import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/highlightContent.module.css'

export default function HighlightContent({
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
                        src={coverImage}
                        alt={`Cover Image for ${title}`}
                        className={styles.image}
                        width={1300}
                        height={630}
                    />
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </Link>
        </div >
    );
}