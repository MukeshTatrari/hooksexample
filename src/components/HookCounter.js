import React, { useState } from 'react';

function HookCounter() {
    const initialState = {
        firstName: '',
        lastName: ''
    };
    const [name, setName] = useState({ initialState });


    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value })} />
                <h2> Your FirstName : {name.firstName}</h2>
                <h2> Your LastName : {name.lastName}</h2>
            </form>
        </div>
    );
}

export default HookCounter;