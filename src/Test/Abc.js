import React, { Component } from 'react';

class Abc extends Component {
    render() {
        console.log("props ",this.props)
        const {x} = this.props.value 
        return (
            <div>
                <input type="text" value={x}></input>
            </div>
        );
    }
}

export default Abc;