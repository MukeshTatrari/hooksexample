import { useRef, memo, useCallback } from "react";

function UseRef2(props) {

    console.log("props ::: ", props);
    const inputElement = useRef("");

    const focusInput = () => {
        inputElement.current.focus();
    };



    // const changeValue = useCallback(() => {
    //     props.setData((t) =>
    //         console.log("t::: ", t)
    //     );
    // })

    const changeValue = (e) => {
        console.log("Okkkkk    :::: ", e.target.value);
        props.setData(e.target.value)
    }

    return (
        <>
            <input type="text" value={props.data} ref={inputElement}
                onChange={changeValue} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}



export default memo(UseRef2)
