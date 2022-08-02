import React, { Component } from 'react';
import { UserContext } from '../App';

class ChildContext extends Component {
    render() {
        return (
            <div>
                hello
                <UserContext.Consumer>
                    {
                        user=>{
                            return <div>User Context Value {user}
                                </div>
                        }
                    }
                </UserContext.Consumer>
            </div>
        );
    }
}

export default ChildContext;