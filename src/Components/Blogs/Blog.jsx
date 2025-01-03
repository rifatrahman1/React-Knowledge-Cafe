import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect (() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blog;