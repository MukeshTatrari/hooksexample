import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then((res) => {
            console.log("res", res);
            document.getElementById("errorId").hidden = true;
            document.getElementById("postTitle").hidden = false;
            setPost(res.data);

        }).catch((err) => {
            console.log(err);
            document.getElementById("errorId").hidden = false;
            document.getElementById("postTitle").hidden = true;
            document.getElementById("errorId").innerHTML = "Error Fetching the value";
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id);
    }
    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={handleClick}> Fetch Post</button>
            <div id="postTitle">{post.title}</div>
            <label id="errorId" hidden> hello </label>
            {/* <ul>
                {
                    post.map(p => <li key={p.id}> {p.title} </li>)
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;