import {configureStore} from '@reduxjs/toolkit'
import vePhimReducer from './Reducers/vePhimReducer'


export const store =  configureStore({
    reducer: {
        vePhimReducer: vePhimReducer
    }
})