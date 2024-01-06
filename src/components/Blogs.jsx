import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

import BlogDetails from './BlogDetails';


const Blogs = () => {

    //consume 
    const { posts, loading } = useContext(AppContext);

    // console.log("inside Blog components")
    // console.log(posts);
    return (
        <div className='w-11/12 max-w-[750px]  py-5 flex flex-col gap-y-6 mt-[50px] mb-[70px]'>
            {
                loading ?
                (<Spinner/>) :
                (
                    posts.length === 0 ?
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (
                        posts.map((post) => (
                            <BlogDetails key={post.id} post={post}/>
                        ))
                    )
                )
            }
        </div>
    )
}

export default Blogs
