import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage"
import TagPage from "./Pages/TagPage"
import CategoryPage from "./Pages/CategoryPage";
export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();




  useEffect(() => {
    
    const page = searchParams.get("page")??1;

    if(location.pathname.includes("tag")){
      //iska mtlab tag wala page show krna h
      const tag = location.pathname.split("/").at(-1.).replaceALL("-","");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceALL("-","");
      fetchBlogPosts(Number(page, null,category));
    }
    else{
       fetchBlogPosts(Number(page))
    }
    
  }, [location.pathname,location.search]);

  return (
    <div className=" w-full h-full flex flex-col  gap-y-1 justify-center items-center">
    
    <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/blog/:blogId" element ={<BlogPage/>} />
        <Route path="/tag/:tag" element ={<TagPage/>} />
        <Route path="/categories/:category" element ={<CategoryPage/>} />
    </Routes>
    
    </div>
  );
}
