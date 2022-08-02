import React from 'react';

function PQR(props) {
    const {x} = props
    return (
        <div>
                <input type="text" value={x}></input>
        </div>
    );
}

export default PQR;