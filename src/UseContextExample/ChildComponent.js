import React, { Component } from 'react';

class ChildComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }
    render() {
        const { text } = this.props;
        return (
            <div>
                <h2>{text}  </h2>
            </div>
        );
    }
}

export default ChildComponent;