import { createSlice } from "@reduxjs/toolkit";


//setting up initial stages of the store 

const initialState = {
    status : false , 
    userData : null
}

//creating slice for authentication or to store if user is logged in or not we do chek at backend for somw services as 
// if the user is authorised to procoess this reqwuest by this wea lso do chek without querying to database again 

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action)=>{
            state.status = true;   // setting up the status of looging in 
            state.userData = action.payload.userData; // sending userdATA TO STORE OR UPDATING USING PAYLOAD 
        },
        logout : (state,action) =>{
            state.status = false ;  // SETTING UP the logout condition 
            state.userData = null ; // undefinig the userdata 
        }

    }
})
  
// exporting them 
export const {login , logout } = authSlice.actions;

export default authSlice.reducer;

/* what we are dping here is we are setting up a store which simply means that 
while once the store get's updated we don't have to ask it again and pass othere sbaout we will stay
 conneced to the app store  and then we will have our values updatedd and revised and revoked  */