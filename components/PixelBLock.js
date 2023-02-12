import React from 'react';

export default function PixelBlock({ bg, fore }) {

    function getRandomArb(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let blocks = []

    for (let i = 0; i < 17; i++) {
        blocks.push(`b${getRandomArb(0, 16)}`);
    }


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