import { useEffect } from "react";
import { useState } from "react"

export const useFetchingData = (url)=>{
    
    const [fetchData, setFetchData] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(()=>{
        const APIData = async ()=>{
            try{
                const req = await fetch(url);
                const res = await req.json();
                setFetchData(res);
            }catch(error){
                setErr(error.message)
            }
        }
        APIData();
    },[])
    return {
        fetchData,
        err
    }

}
