import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate,  } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';
const BlogPage = () => {

    const [blog, setBlog] = useState(null);
    const [relatedblog,setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setloading } = useContext(AppContext);

    // const blogId = location.pathname.split("/").at(-1);
     const blogId = location.pathname.split("/").pop();


    async function fetchRelatedBlogs() {

     setloading(true);
       let url = `${baseUrl}?blogId=${blogId}`;
  
       try {
          const res = await fetch(url);
         const data = await res.json();
  
         setBlog(data.blog);
         setRelatedBlogs(data.relatedblogs);
        //  console.log("inside Blog Pade")
        //  console.log(data.blog);
  
        
       } catch (error) {
          console.log("Error aagya in blog id wali call");
          setBlog(null);
          setRelatedBlogs([]);
       }
     setloading(false);
 }         

useEffect(() => {
  if (blogId) {
    fetchRelatedBlogs();
  }
}, [location.pathname, blogId]);

  return (
    <div>
            <Header/>
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            {  loading ? (
                <div>
                  <p>Loading...</p>
                </div>

            ) :
            blog ? (
               <div>
              <BlogDetails post ={blog}/> 

                <h2>Related Blogs</h2>
                {
                   relatedblog.map((post)=>(
                     <div key={post.id}>
                      <BlogDetails post ={post}/> 
                    </div>  
                   ))
                   
                }

                </div> ):
                
              (<div>
                <p>No Blog Found</p>
              </div>)
            
            
            }
    </div>
  )
}

export default BlogPage
