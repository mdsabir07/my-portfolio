import React from 'react';

const Logo = () => {

    return (
        <>
            <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20L20 50L40 80" stroke="#0074D9" stroke-width="10" stroke-linecap="square" fill="none" />
                <path d="M80 20L100 50L80 80" stroke="#0074D9" stroke-width="10" stroke-linecap="square" fill="none" />
                <text x="140" y="60" font-family="'Courier New', monospace" font-size="36" font-weight="bold" fill="#111827">CoderDevs</text>
                <text x="140" y="90" font-family="'Courier New', monospace" font-size="36" font-weight="bold" fill="#0074D9">BD</text>
            </svg>
        </>
    );
};

export default Logo;