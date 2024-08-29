import axios from 'axios';
import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loadings,setLoading]=useState(true);
    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            try{
                const req=await axios(url);
                const sample=req.data;
                setData(sample)
                setLoading(false);
            }catch(error){
                console.log("Use Fetch error",error);
                console.error(error);
                setLoading(false);
                setError(error);
            }
        }
        fetchData();
    },[]);
  return {loadings,error,data};
}

export default useFetch;