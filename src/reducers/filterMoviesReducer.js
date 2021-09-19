const  moviesInitialState=[]                                    //[{id:1,value=0}]
export const filterMoviesReducer=(state=moviesInitialState,action)=> {
    switch(action.type){
        case 'NEW_VALUE':{
            return[...action.payload]
        }
        case 'ADD_MOVIE_2':{
            return[...state,{...action.payload}]
        }
        default:{
            return[...state]
        }
    }

}


export default filterMoviesReducer



