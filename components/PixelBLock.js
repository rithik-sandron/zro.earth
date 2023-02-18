import React, { useEffect, useState } from 'react';

export default function PixelBlock({ isList = false, bg = '', fore = '' }) {
    const [blocks, setBlocks] = useState([]);

    function getRandomArb(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        let tmpblocks = [];
        for (let i = 0; i < 17; i++) {
            tmpblocks.push(`b${getRandomArb(0, 16)}`);
        }
        setBlocks(tmpblocks);
    }, [])

    return (
        blocks &&
        <div className='barcode' style={{ backgroundColor: bg }}>
            {
                blocks.map((x, i) => {
                    return <div key={i} className={x} style={{ backgroundColor: fore, maxHeight: (isList && i < 8) && '2em' }} />
                })
            }
        </div>
    )
}