import React from 'react';

export default function PixelBlock({ bg, fore, blocks = [''] }) {
    return (
        <div className='barcode' style={{ backgroundColor: bg }}>
            {
                blocks.map((x, i) => {
                    return <div key={i} className={x} style={{ backgroundColor: fore }} />
                })
            }
        </div>
    )
}