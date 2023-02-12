import React from 'react';

export default function PixelBlock({ bg, fore }) {

    function getRandomArb(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const blocks = Array(16).fill();

    return (
        <div className='barcode' style={{ backgroundColor: bg }}>
            {
                blocks.map(x => {
                    return <div className={`b${getRandomArb(0, 16)}`} style={{ backgroundColor: fore }} />
                })
            }
        </div>
    )
}