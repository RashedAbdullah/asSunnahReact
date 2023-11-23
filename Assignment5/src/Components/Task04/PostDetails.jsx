import React, { useState } from 'react'
import './Posts.css';

const PostDetails = ({data}) => {

    const {id, title, body} = data;
    const [showData, setShowData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [comments, setCommnet] = useState([]);

    const seeFullPost = ()=>{
        setShowData([...showData, id, title, body]);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue !== ""){
            setCommnet([...comments, inputValue]);
            setInputValue("");
        } else {
            alert("Please input somthing!")
        }
    }

  return (
    <div id='PostDetails'>
        <button onClick={seeFullPost}>See details</button>
        <div>
            {showData.length > 0 && <div>
                <p>ID: {id}</p>
                <p><b>Title</b>: {title}</p>
                <p><b>Body</b>: {body}</p>

                <form action="" onSubmit={handleSubmit}>
                    <input placeholder='Add your comment' type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
                    <input type="submit" />
                </form>
                    {
                        comments.map((comment,index)=>(
                            <ul key={index}>
                                <li>{comment}</li>
                            </ul>
                        ))
                    }
            </div>}
        </div>
    </div>
  )
}

export default PostDetails;