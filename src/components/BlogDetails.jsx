import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  useEffect(() => {
    console.log("post is - ---- ", post);
  },[post]);
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      <p>
        By
        <span>{post.author}</span>on{" "}
        <NavLink to={`/categories/${post.category.replaceAll("", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div>
           {post.tags.map((tag,index)=>(
              <NavLink key ={index} to={`/tag/${tag.replaceAll("","-")}`}>
                <span>{`#${tag}`}</span>
              </NavLink>
           ))}
      </div>
    </div>
  );
};

export default BlogDetails;
