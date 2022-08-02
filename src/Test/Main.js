import React, { Component } from 'react';
import Abc from './Abc';
import Pqr from './Pqr';

class main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 1
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeValues();
        }, 3000)
    }
    changeValues = () => {
        console.log("hello executing")
     this.setState({
         x:1,
         y:0
     })
    }

    render() {
        const {x,y} = this.state;
        console.log("z:::: ",x, y)
        return (
            <div>
                <Abc value={this.state} />
                <Pqr value={this.state} />
            </div>
        );
    }
}

export default main;