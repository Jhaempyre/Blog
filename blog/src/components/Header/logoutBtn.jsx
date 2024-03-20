import React from "react";
import { UseDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
function LogoutBtn(){
    const dispatch =  UseDispatch();
    const logoutHandler = ()=>{
        authService.logOutUser().then(dispatch(logout()))
    }

    return (
        <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    )
}


export default LogoutBtn