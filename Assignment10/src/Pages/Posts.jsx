import React from 'react'
import { useLoaderData, NavLink } from 'react-router-dom';

const Posts = () => {
    const postData = useLoaderData();
   
  return (
    <div style={{textAlign: "center"}}>
        {
            postData.map(post=>(
                <div key={post.id}>
                    <p>ID: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <NavLink to={`/posts/${post.id}`}><button>See details</button></NavLink>
                </div>
            ))
        }
    </div>
  )
}

export default Posts;