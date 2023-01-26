import React, { useEffect, useState } from 'react';

export default function Footer({ bg = '', fore = '' }) {

    return (
        <div className="footer" id='head' style={{
            backgroundColor: bg,
            color: fore 
        }}>
            <footer>
                made with ❤️ 
            </footer>
        </div>
    );
}