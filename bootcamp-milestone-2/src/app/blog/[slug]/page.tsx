import connectDB from "@/helpers/db";
import style from "../blogs.module.css"
import Blog, { IComment } from "@/database/blogSchema";
import Comment from "../../../../src/components/commentPreview";
import AddComment from "../../../../src/components/addComment";
import { Key } from "react";
//import style from "../../../../public/images/The_Boys.jpeg"

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	await connectDB();

    try {
        // Query for a blog with the specified slug
        const blog = await Blog.findOne({ slug }).orFail();
        return blog;
    } catch (err) {
        return null;
    }
}

export default async function BlogData( {params}: Props){
	// now we can access slug
    var slug = params.slug;
    //console.log(slug)
	var blog = await getBlog(slug);
    var date = blog.date.toString()
    var date_array = date.split(" ")
    var new_date = date_array[1] + "-" + date_array[2] + "-" + date_array[3]

	return(
        <main className={style.main}>
                {blog == null ? (
                    <div>
                        No blogs to show :(
                    </div>):
                    <div>
                        <h1 className={style.page_title}>{blog.title}</h1>
                        <h4 className={style.blog_date}>Last updated: {new_date}</h4>
                        <img className={style.blog_img} src={blog.image}></img>
                        <p>{blog.content}</p>
                        <h4 className={style.page_title_h4}>Comments</h4>
                        <AddComment slug={slug}/>
                        {blog.comments.map((comment: IComment, index: Key | null | undefined) => (
                            <Comment key={index} comment={comment} />
                        ))}
                        <footer className={blog.footer}>© 2023 Sameer's Personal Website | All Rights Reserved</footer>
                    </div>
                }
        </main>
    
        );
}