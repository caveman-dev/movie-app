const  moviesInitialState=[]                                    //[{id:1,value=0}]
export const moviesReducer=(state=moviesInitialState,action)=> {
    switch(action.type){
        case 'ADD_MOVIE':{
            return[...state,{...action.payload}]
        }
        case 'DELETE_MOVIE':{
            return [...action.payload]
            // return state.filter((movie)=>{
            //     return movie.id!==action.payload
            // })
        }
        
        default:{
            return[...state]
        }
    }

}
// export const filterMoviesReducer=(state=moviesInitialState,action)=> {

        
//         default:{
//             return[...state]
//         }
//     }

// }
export default moviesReducer



