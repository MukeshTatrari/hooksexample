import React,{useState} from 'react';

function useStateExample() {

    const [count,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> clicked {count} times</button>
        </div>
    );
}

export default useStateExample;