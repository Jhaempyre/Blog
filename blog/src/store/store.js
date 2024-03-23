import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
//import { combineReducers } from "@reduxjs/toolkit"

const store = configureStore({
    reducer : {
        auth : authSlice,
    }
})

export default store