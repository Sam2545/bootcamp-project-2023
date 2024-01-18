
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from '@/database/blogSchema'
import Blog, { IComment } from '@/database/blogSchema'

type IParams = {
		params: {
			slug: string
		}
}

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

	There are more ways to destructure this, but that is up to you to find out
	lol.

 */
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
	const { slug } = params // another destructure

	try {
		const blog = await blogSchema.findOne({ slug }).orFail()
		return NextResponse.json(blog)
	} catch (err) {
		return NextResponse.json('Blog not found.', { status: 404 })
	}
}

export async function POST(req: NextRequest, {params}: IParams) {
	console.log("workingg");
	const body = await req.json();
    
	if (body == null) {
		return NextResponse.json("Blog body not found");
	}
    const slug = body.slug; 

    await connectDB();
    try {
        const blogPost = await Blog.findOne(slug).orFail()
        const user = String(body.user);
        const comment = String(body.comment);
        const time = new Date();
        const newComment = { user, comment, time };
        blogPost.comments.push(newComment);

        await blogPost.save();

        return NextResponse.json("Comment added", { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json("Turned null");
    }
}

function extractFormData(formData: FormData): IComment | null {
    throw new Error('Function not implemented.');
}

