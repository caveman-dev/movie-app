export const addMovie=(movie)=>{
    return {
        type:'ADD_MOVIE',
        payload:movie
    }
}
export const addMovie2=(movie)=>{
    return {
        type:'ADD_MOVIE_2',
        payload:movie
    }
}


export const deleteMovie=(id)=>{
    return{
        type:'DELETE_MOVIE',
        payload:id
    }
}
export const newValue=(movie)=>{
    return{
        type:'NEW_VALUE',
        payload:movie
    }
}