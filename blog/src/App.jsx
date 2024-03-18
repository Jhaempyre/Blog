import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'


function App() {
  const [loading ,  setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser
    .then((userData)=>{
      if (userData){
        dispatch(login(userData))
      }else{
        dispatch(logout())
      }

    })
    .finally( () => {setLoading(false)})
  },[])

  return (
    <>
      <h1>A blogging website with backend as a service</h1>
    </>
  )
}

export default App
