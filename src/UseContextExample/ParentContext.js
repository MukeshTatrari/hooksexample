import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../App';
import ChildComponent from './ChildComponent';
import ChildContext from './ChildContext';

function ParentContext(props) {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {user} - {channel}
            <ChildComponent text={"hello"}/>
        </div>
    );
}

export default ParentContext;