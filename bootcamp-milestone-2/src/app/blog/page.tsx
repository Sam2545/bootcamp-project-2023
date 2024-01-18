import React from "react";
import style from './blogs.module.css'
import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

async function getBlogs(){
    await connectDB() // function from db.ts before

    try {
            // query for all blogs and sort by date
        const blogs = await Blog.find().sort({ date: -1 }).orFail()
            // send a response as the blogs as the message
        return blogs
    } catch (err) {
        return null
    }
}

export default async function Blogs() {

    

    const blogs = await getBlogs();
    // handle null exception

    return(
        <main>
            <h2 className={style.page_title}>Sameer's Blogs</h2>
            <div>
                {blogs == null ? (
                    <div>
                        No blogs
                    </div>):
                    <div>
                        {blogs.map(blog =>
                            <BlogPreview  {...blog.toObject()} />
                        )}
                    </div>
                }
            </div>
        </main>
    
        );
}