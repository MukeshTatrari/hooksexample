import React from 'react';

function XYZ(props) {
    const { y } = props
    return (
        <div>
            <input type="text" value={y}></input>
        </div>
    );
}

export default XYZ;