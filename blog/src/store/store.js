import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
//import { combineReducers } from "@reduxjs/toolkit"

// getting reducers which we have made so that we can acces the content without using context api 
const store = configureStore({
    reducer : {
        auth : authSlice,
    }
});

export default store ;