import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom';
import {login} from '../store/authSlice'
import authService from '../appwrite/auth'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

/* this function particullarly have a function of getting user Data 
and creating userAccount using appwrite service . */
function SignIn() {
const navigate = useNavigate()
const dispatch = useDispatch()
const  {register , handleSubmit }= useForm();
const [error, setError] = useState("")

const createUser = async(data)=>{
    setError("")
    try {
        const userData = await authService.createAccount(data);
        if (userData){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate("/")
        }
    } catch (error) {
        setError(error.message)
        
    }
}
/* returning  UI for this login screen  */
  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
{/*rhis part gives a form which again serves for geeting userdata and submitting it to 
appwrite services or createUser */}
        <form onSubmit={handleSubmit(createUser)}>
            <div className='space-y-5'>
                <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                    required: true,
                })}
                />
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,})}
                />
                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </div>
        </form>
    </div>

</div>
)
}

export default SignIn