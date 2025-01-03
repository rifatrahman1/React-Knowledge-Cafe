
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, set_blogs] = useState([]);
    useEffect (() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => set_blogs(data))
    }, [])
    return (
        <div className="md:w-2/3">

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;