import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            setCursorPosition({ x, y });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="cursor-follower"
            style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>
    );
};

export default CursorFollower;
