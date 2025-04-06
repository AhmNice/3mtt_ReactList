import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import ListCard from './ListCard';
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmU3NTY1MmY4NWQ1NDZlNjNkZGFkZmU1MGU3NjU1YiIsIm5iZiI6MTc0MjE1MDY1MC40NTQwMDAyLCJzdWIiOiI2N2Q3MWJmYWViYzMwYTBiNDgwMTM3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.p2Y-AAKohHDKdSLyRFDKe52NMtBLu4Uc868VM2dIgxQ"; // Replace with actual TMDb API token
const API_KEY = '16e75652f85d546e63ddadfe50e7655b';
const BASE_URL = "https://api.themoviedb.org/3";



const ListComponent = () => {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(()=>{
      const fetchData = async ()=>{
        setLoading(true)
        try {
          const response = await fetch(`${BASE_URL}//movie/now_playing?api_key=${API_KEY}`,{
            method:'GET',
            headers:{
              Authorization: `Bearer ${API_TOKEN}`,
              'Content-Type':'application/json'
            }
          })
          if(!response.ok) throw new Error("Could not fetch data")
            const data = await response.json()
            setList(data.results || [])
        } catch (error) {
          console.log(error.message)
        }finally{
          setLoading(false)
        }
      }
      fetchData()
    },[])
  return (
    <section className=''>
       <h1 className='font-bold text-2xl p-4 text-center'>New Movie Lists</h1>
        {isLoading && <div className='flex justify-center items-center h-screen'>
            <FadeLoader color='#E50000' size={20}/>
        </div>}
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-4 gap-3 gap-1'>
      {list.map((list)=>(
          <ListCard source={list} key={list.id}/>
       ))}
      </div>
    </section>
  )
}

export default ListComponent