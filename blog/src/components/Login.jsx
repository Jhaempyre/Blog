import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button , Input , Logo } from './index'
import { UseDispatch, useDispatch } from 'react-redux'
import { Authservice } from '../appwrite/auth'
import {useForm} from "react-hook-form"
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit } = useForm()
    const [error , setError ]= useState("")



  return (
    <div>Login</div>
  )
}

export default Login