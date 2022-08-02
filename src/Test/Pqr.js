import React, { Component } from 'react';

class Pqr extends Component {
    render() {
        const {y} = this.props.value
        return (
            <div>
                 <input type="text" value={y}></input>
            </div>
        );
    }
}

export default Pqr;