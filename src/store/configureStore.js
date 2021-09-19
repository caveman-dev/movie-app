import {createStore,combineReducers} from 'redux'
import filterMoviesReducer from '../reducers/filterMoviesReducer'
import moviesReducer from '../reducers/moviesReducer'
const configureStore=()=> {
    const store=createStore(combineReducers({
        movies:moviesReducer,
        filterMovies:filterMoviesReducer
    }))
    return store    
}

export default configureStore
