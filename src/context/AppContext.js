import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

   //Fetch Blog Data
  async function fetchBlogPosts(p ,tag=null ,category) {
    setloading(true);
    console.log("page is - ", p);
    let url = `${baseUrl}?page=${p}`;
    if(tag){
      url += `&tag=${tag}`;
   }
   if(category){
     url += `&category=${category}`;
      
   }

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log("sd- ", data.page);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setloading(false);
  }

  function handlePageChange(p) {
    setPage(p);
    console.log("set page is  - ", p);
    fetchBlogPosts(p);
  }

  const value = {
    posts,
    setPosts,
    loading,
    setloading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>;
}

