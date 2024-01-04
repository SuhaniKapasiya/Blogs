import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"




const Blogs = () => {

    //consume 
    const { posts, loading } = useContext(AppContext);

    // console.log("inside Blog components")
    // console.log(posts);
    return (
        <div className='w-11/12 max-w-[750px] py-5 flex flex-col gap-y-6 mt-[50px]'>
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
                            <div key={post.id}> {/* Added a key prop for optimization */}
                                <p className="font-bold text-md">{post.title}</p>
                                <p className='text-xs mt-[4px]'>
                                    By <span className='italic'>{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                                </p>
                                <p className='text-xs mt-[4px]'>Posted on {post.date}</p>
                                <p className='text-sm mt-[14px]'>{post.content}</p>
                                <div className="flex gap-x-3">
                                    {post.tags.map((tag,index) => { 
                                        return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px] '>{`#${tag}`}</span>;  // Added a key prop for optimization
                                    })}
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>
    )
}

export default Blogs
