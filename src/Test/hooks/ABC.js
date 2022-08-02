import React, { useState, useEffect } from 'react';
import PQR from './PQR';
import XYZ from './XYZ';

function ABC() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            setX(1);
            setY(0);
        }, 3000)
    },[])

    return (
        <div>
            <PQR x={x}/>
            <XYZ y={y} />
        </div>
    );
}

export default ABC;