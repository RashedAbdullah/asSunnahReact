import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {id, title, body} = useLoaderData();
    
  return (
    <div style={{textAlign: "center", background: "black", color: "white", padding: "100px"}}>
        <h2>Post details</h2>
        <p>id: {id}</p>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
    </div>
  )
}

export default Details;