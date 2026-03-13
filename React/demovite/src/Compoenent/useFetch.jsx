import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(url){

    useEffect(()=>{
        fetchdata()
    },[])

    const [data,setdata] = useState([])
  
    const fetchdata=async()=>{
        const res = await axios.get(url)
        // console.log(res.data)
        setdata(res.data)
    }

    return {data}

}

export default useFetch
