import React from 'react';

export default function PixelBlock({ bg, fore }) {

    function getRandomArb(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    return (
        <div className='barcode' style={{ backgroundColor: bg }}>
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(x => {
                    return <div className={`b${getRandomArb(0, 16)}`} style={{ backgroundColor: fore }} />
                })
            }
        </div>
    )
}