import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addMovie,addMovie2} from '../actions/moviesAction'
const MovieForm=()=> {
    const dispatch=useDispatch()
    const[title,setTitle]=useState('')
    const[rating,setRating]=useState('')
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleRating=(e)=>{
        setRating(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(title.length<1||rating.length <1){
            alert("fill in all the values")
            break
        }
        if(Number(rating)< 1 && Number(rating)>10){
            alert('rate between 1 and 10')
        }
        const movie={
            id:Number(new Date()),
            title:title,
            rating:rating
        }
        dispatch(addMovie(movie))
        dispatch(addMovie2(movie))
        setTitle('')
        setRating('')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleTitle}/>
                <input type="number" value={rating} onChange={handleRating}/>
                <input type="submit" value="Add"/>
            </form>
            
        </div>
    )
}

export default MovieForm
