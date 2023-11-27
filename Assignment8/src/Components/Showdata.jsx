import React from 'react'
import { useFetchingData } from '../Hooks/useFetchiData';

const Showdata = () => {


    const url1 = `https://jsonplaceholder.typicode.com/users`;
    const url2 = `https://jsonplaceholder.typicode.com/posts`;
    const url3 = `https://jsonplaceholder.typicode.com/albums`;
    const url4 = `https://jsonplaceholder.typicode.com/todos`;
    const url5 = `https://jsonplaceholder.typicode.com/comments`;
    const url6 = `https://jsonplaceholder.typicode.com/photos`;

    const {fetchData, err} = useFetchingData(url1);
    const {fetchData: fetchData2, err: err2} = useFetchingData(url2);
    const {fetchData: fetchData3, err: err3} = useFetchingData(url3);
    const {fetchData: fetchData4, err: err4} = useFetchingData(url4);
    const {fetchData: fetchData5, err: err5} = useFetchingData(url5);
    const {fetchData: fetchData6, err: err6} = useFetchingData(url6);

  return (
    <div>
        <h2>User data</h2>
        {err && <p>{err}</p>}
        {
            fetchData && fetchData.map(value=>(
                <div key={value.id}>
                    <p>name: {value.name}</p>
                    <p>email: {value.email}</p>
                </div>
            ))
        }

        <h2>Post data</h2>
        {err2 && <p>{err2}</p>}
        {
            fetchData2 && fetchData2.map(value=>(
                <div key={value.id}>
                    <p>Title: {value.title}</p>
                    <p>Body: {value.body}</p>
                </div>
            ))
        }

        <h2>Album data</h2>
        {err3 && <p>{err3}</p>}
        {
            fetchData3 && fetchData3.map(value=>(
                <div key={value.id}>
                    <p>Title: {value.title}</p>
                </div>
            ))
        }

        <h2>Todos data</h2>
        {err4 && <p>{err4}</p>}
        {
            fetchData4 && fetchData4.map(value=>(
                <div key={value.id}>
                    <p>Title: {value.title}</p>
                    <p>Complete status: {value.completed}</p>
                </div>
            ))
        }

        <h2>Comments data</h2>
        {err5 && <p>{err5}</p>}
        {
            fetchData5 && fetchData5.map(value=>(
                <div key={value.id}>
                    <p>name: {value.name}</p>
                    <p>email: {value.email}</p>
                </div>
            ))
        }

        <h2>Photos data</h2>
        {err6 && <p>{err6}</p>}
        {
            fetchData6 && fetchData6.map(value=>(
                <div key={value.id}>
                    <p>Title: {value.title}</p>
                    <img src={value.url} alt="" />
                </div>
            ))
        }
    </div>
  )
}

export default Showdata;