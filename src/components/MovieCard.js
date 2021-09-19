import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { deleteMovie } from '../actions/moviesAction'

const MovieCard=(props)=> {
  const  {id,title,rating}=props
  const movies=useSelector((state)=>{
    return state.movies
})
    const dispatch = useDispatch()
    const handleDelete=(e)=>{
        const shazam=movies.filter((movie)=>{
            return movie.id!==id
        })
        console.log(shazam,"shazam")
        dispatch(deleteMovie(shazam))
    }
    return (
        <div>
            <ul>
                <li>{title}</li>
                <li>{rating}</li>
                
            </ul>
            <input type="button" onClick={handleDelete} />
        </div>
    )
}

export default MovieCard
