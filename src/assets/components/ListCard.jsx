import React from 'react'

const ListCard = ({source}) => {
    const baseURL = 'https://image.tmdb.org/t/p/original'
    const imageURL = baseURL + source.poster_path
    const description =source.overview
  return (

    <div className='bg-white shadow-md rounded-lg p-4 flex gap-4 w-80 h-28'>
        <div className='poster flex rounded-md'>
            <img src={imageURL} className='rounded-sm w-full h-full' alt='posterImage'/>
        </div>
        <div className='flex flex-col  w-full'>
            <h2 className='text-md font-bold text-gray-700'>{source.title}</h2>
            <p className='text-sm text-gray-400'>{description.slice(0, 40)+ '...'}</p>
        </div>
    </div>
  )
}

export default ListCard