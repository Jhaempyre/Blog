import React from "react";
import { useDispatch} from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

/* to send any data in store we use usedispactch hook here logout handler 
is cheking if login is true and logout is called wr will send logout in store */
function LogoutBtn(){
    const dispatch =  useDispatch();
    //logging out and dispactching to the store 
    const logoutHandler = ()=>{
        authService.logOutUser().
        then(dispatch(logout()))
    }

    return (
        //this button help  us to log out the user using appwrite services
        <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    )
}


export default LogoutBtn