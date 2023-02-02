import React from 'react';
import Link from 'next/link';
export default function HighlightContent({
    bg = '',
    fore = '',
    title = '',
    coverImage = '',
    slug = '',
    list = ''
}) {

    return (
        <div className='head-content'>
            <Link
                style={{ border: 'none', textDecoration: "none", color: 'transparent' }}
                as={`/${list}/${slug}`}
                href={`/[list]/[slug]`} >
                <div key={slug} className='head-content-container'
                    style={{ border: `1px solid ${fore}`, boxShadow: `14px 14px 0 ${fore}` }}
                >
                    <img src={coverImage} className='image' alt='coverImage'
                    />
                    <h1 className='post' style={{
                        color: fore, backgroundColor: bg
                    }}>{title}</h1>
                </div>
            </Link>

        </div >
    );
}