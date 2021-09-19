import React from 'react'
import {useSelector} from 'react-redux'
function MovieStats() {
    const movies=useSelector((state)=>{
        return state.movies
    })
    const zed=[...movies].sort((a, b) => (a.rating > b.rating) ? -1 : 1)
        // console.log('zed',zed[0].title)
        // console.log('movies',[...movies])
  
   
    return (
        <div>
            <span>total movies-{movies.length}</span>
           <span>top ranked movie-{(zed[0])&&zed[0].title}</span>
        </div>
    )
}

export default MovieStats
