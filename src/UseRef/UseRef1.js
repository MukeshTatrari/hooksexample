import { useState, useEffect, useRef, memo } from "react";
import Display from "./Display";
import UseRef2 from "./UseRef2";

function UseRef1() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const [count1, setCount] = useState(count);
    const [data, setData] = useState("");

    useEffect(() => {
        console.log("inside useEffect ::::: ")
        count.current = count.current + 1;
    }, [count1]);

    const incrementCount = () => {
        console.log("count :::: " + count.current)
        setCount(count1 + 1)
    }

    const resetCount = () => {
        count.current = 0;
        // setCount(0);
        setInputValue("");
        setData("");
    }

    const changeValue1 = (e) => {
        console.log("mukesh   ", e.target.value);
        setInputValue(e.target.value)
        incrementCount()
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={changeValue1}
            />
            {/* <Display count={count1} /> */}
            <Display count={count.current} />
            <button onClick={() => resetCount()}> Reset</button>
            <div>
                <UseRef2 data={data} setData={setData} />
            </div>
        </div>
    );
}


export default memo(UseRef1)
