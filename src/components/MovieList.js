import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import {deleteMovie,newValue} from '../actions/moviesAction'
function MovieList() {
    const dispatch=useDispatch()
    const movies=useSelector((state)=>{
        return state.movies
    })
  
    const filterMovies=useSelector((state)=>{
        return state.filterMovies
    })
    useEffect(()=>{
        // const movies=useSelector((state)=>{
        //     return state.movies
        // })
        console.log("hereee,",movies )
        dispatch(newValue([...movies]))
    },[])
  
    // const movies2=useSelector((state)=>{
    //     return state.movies
    // })
    
    const[searchText,setSearchText]=useState("")
    const[sort,setSort]=useState('')
    const[flag,setFlag]=useState(false)
    const[value,setValue]=useState([...movies])
    const [finalValue,setFinalValue]=useState([...movies])
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleSearch=(e)=>{
        // setFinalValue([...movies])
       setFlag(true)
       const b=e.target.value
       setSearchText(b)
       const a=[...movies]
       console.log("a",a)
       const vandal=a.filter((movie)=>{
           if(movie.title.toString().toLowerCase().includes(b.toString().toLowerCase())){
               return movie
           }
       })
       console.log('vandal',vandal)
       setFinalValue(vandal)
    }
//    const handleSubmit=(e)=>{
//         e.preventDefault()
    
//     }
    const handleSort=(e)=>{
        setSort(e.target.value)
      //  const z=[...finalValue]
       // console.log('z',z)
        
        console.log(value,'value')
        // console.log("shazam",shazam)
        // console.log("shazam reverse",bazinga)
        const shazam2=movies.sort((a, b) => (a.title > b.title) ? 1 : -1)
        const bazinga2=movies.sort((a, b) => (a.title > b.title) ? -1 : 1)
        // (flag)?():()
        if(searchText){
            if(e.target.value=='L2H'){
                const bazinga=finalValue.sort((a,b)=>(a.title > b.title) ? 1 : -1)
                console.log("shazam reverse",bazinga)
                setFinalValue(bazinga)
            }
            else{
                const shazam=finalValue.sort((a, b) => (a.title > b.title) ? -1 : 1)
                console.log("shazam",shazam)
                setFinalValue(shazam)
            }
        }
        else {
            if(e.target.value=='L2H'){
                const apple=movies.sort((a,b)=>(a.title > b.title) ? 1 : -1)
                console.log("movies",movies)
                dispatch(newValue([...movies]))
               
            }
            else{
                const apple=movies.sort((a, b) => (a.title > b.title) ? -1 : 1)
                console.log("movie reverse",movies)
                dispatch(newValue([...movies]))
            }
        }
       
    }
    const handleDelete=(e)=>{
        const shazam=movies.filter((movie)=>{
            console.log('moviid',movie.id,'value')
            return movie.id!== Number(e.target.value)
        })
       // console.log(movies,"movies")
        console.log('value',e.target.value)
      console.log("delete Shazam",shazam)
        setFinalValue([...shazam])
        dispatch(deleteMovie(shazam))
        dispatch(newValue(shazam))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
            <input type="text" onChange={handleSearch} />
            </form>
           <select value={sort} onChange={handleSort}>
               <option>sort</option>
               <option value="H2L">High To Low</option>
               <option value="L2H">Low To High</option>
           </select>
           <div>
               {(searchText)?(
                    finalValue.map((movie)=>{
                        return(
                            // <MovieCard {...movie}/>
                            <div key={movie.id}>
                                 <ul>
                                <li>{movie.title}</li>
                                <li>{movie.rating}</li>
                            </ul>
                            <button value={movie.id} onClick={handleDelete}>delete</button>
                            </div>
                           
                        )
                   })

               ):(
                filterMovies.map((movie)=>{
                    return(
                        // <MovieCard {...movie}/>
                        <div>
                             <ul>
                            <li>{movie.title}</li>
                            <li>{movie.rating}</li>
                        </ul>
                        <button value={movie.id} onClick={handleDelete}>delete</button>
                        </div>
                       
                    )
               })
               )}
       
               {/* {

                    finalValue&& finalValue.map((movie)=>{
                        return(
                            // <MovieCard {...movie}/>
                            <div>
                                <ul>
                                <li>{movie.title}</li>
                                <li>{movie.rating}</li>
                            </ul>
                            <span value={movie.id} onClick={handleDelete}>delete</span>
                            </div>
                        
                        )
                    })
               } */}
           </div>
        </div>
    )
}

export default MovieList
