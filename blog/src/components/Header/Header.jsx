import React from 'react'
import {Container ,Logo ,LogoutBtn} from "../index.js"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {

    //cheking from the store wether state is active or what ? for getting information
    //form the store thaat is name auth or of the initalstate we are using 
    //useSelector.
    const authStatus = useSelector(state => state.auth.status)

    //usenavigate to provode navigation between the pages .

    const navigate = useNavigate()

    //we are adding the navelemnt in array of objects with predefined 
    //value with name slug and status , slug being the url anything can be there
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name : 'Login',
            slug : "/login",
            active : !authStatus            /*to chek here something  */
        },        
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    const handleNavigation = (slug) => {
        try {
            navigate(slug);
        } catch (error) {
            console.error("Error navigating:", error);
            // Handle error here, e.g., display an error message to the user
        }
    };

    return (
        <header className='py-3 shadow bg-gray-500'>
             {/* Container to wrap header content */}
            <Container>
                <nav className='flex'>
                    <div className='mr-5'>
                        <Link to="/">
                            <Logo width='70px'/>
                        </Link>

                    </div>
                    <ul className='flex ml-auto'>
                        {
                            navItems.map(
                                (item) => item.active ? 
                                <li key={item.name}>
                                    <button 
                                    onClick={()=>(
                                        handleNavigation(item.slug)
                                    )}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >{item.name}</button>
                                </li>
                                : null
                                
            
                            )
                        }

                        {
                            authStatus && (
                                <li>
                                    <LogoutBtn/>
                                </li>
                            )
                        }

                    </ul>
                </nav>
            </Container>
        </header>
    )
    
}

export default Header


/*
for respective tags respectively .
Container to wrap header content
Navigation section
Logo
List of navigation items
Mapping through navItems
Button for navigation item
Display navigation item name
Logout button if user is authenticated
Logout button component
*/