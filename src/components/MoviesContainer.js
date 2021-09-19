import React from 'react'
import MovieList from './MovieList'
import MovieStats from './MovieStats'
import MovieForm from './MovieForm'
const MoviesContainer=()=> {
  
    return (
      
        <div>
            <MovieList/>
            <MovieForm/>
            <MovieStats/>
        </div>
    )
}

export default MoviesContainer
