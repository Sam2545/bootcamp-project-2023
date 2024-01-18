import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema, { IComment } from '@/database/blogSchema'
import Blog from '@/database/blogSchema';

type IParams = {
		params: {
			slug: string
		}
}

export async function POST(req: NextRequest, {params}: IParams) {
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
