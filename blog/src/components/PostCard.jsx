import React from 'react'; // Importing React library for JSX functionality
import appwriteService from "../appwrite/config"; // Importing appwriteService from '../appwrite/config' for appwrite configuration
import {Link} from 'react-router-dom'; // Importing Link component from 'react-router-dom' for navigation

function PostCard({$id, title, image}) { // Declaring functional component PostCard with props $id, title, and image
    
    return (
        <Link to={`/post/${$id}`}> {/* Link component for navigating to the post with $id */}
            <div className='w-full bg-gray-100 rounded-xl p-4'> {/* Container for the post card */}
                <div className='w-full justify-center mb-4'> {/* Container for the post image */}
                    <img src={appwriteService.getFilePreview(image)} alt={title} // Image tag for displaying the post image
                        className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2> {/* Title of the post */}
            </div>
        </Link>
    );
}

export default PostCard; // Exporting the PostCard component

