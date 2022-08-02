import React, { Component } from 'react';
import ChildContext from './ChildContext';
import ParentContext from './ParentContext';

class UseContextExample extends Component {
    render() {
        return (
            <div>
                <ParentContext />
                <ChildContext />
            </div>
        );
    }
}

export default UseContextExample;