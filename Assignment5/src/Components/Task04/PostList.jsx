import React, { useEffect } from 'react'
import { useState } from 'react';
import PostDetails from './PostDetails';
import './Posts.css';

const PostList = () => {
    const [manageApi, setManageApi] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/posts";
    useEffect(()=>{
        fetch(URL)
        .then(res => res.json())
        .then(data => setManageApi(data))
    },[])

  return (
    <div id='mainPostDataDiv'>
        {
            manageApi.map(data=>(
                <div key={data.id}>
                    <h4>id: {data.id}</h4>
                    <PostDetails data={data}/>
                </div>
            ))
        }
    </div>
  )
}

export default PostList;