"use client"
import { useState } from "react"

export default function AddComment(slug:any) {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");
    const newSlug = slug.slug

    const submitForm = (event:any) => {
        console.log("WORKING")
        event.preventDefault()
        var url;
        console.log(newSlug.includes("blog"))
        if (newSlug.includes("blog")){
            url = "blog/" + slug + "/comment"
            console.log(url)
        }
        else{
            url = "portfolio/comment"
            console.log(url)
        }
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({user, comment, slug})
        });
        setComment("");
        setUser("");
    }
    const changeComment = (event: any) => { setComment(event.target.value); }
    const changeUsername = (event: any) => { setUser(event.target.value); }
    
    return(
		<div>
            <form onSubmit={submitForm}>
                <label htmlFor="username">Username: 
                <input required value={user} onChange={changeUsername} id="username" className="usernameEntry"/>
                </label>
                <label htmlFor="comment">Comment:
                <textarea required value={comment} onChange={changeComment} id="comment" className="commentEntry"/>
                </label>
                <button type="submit">Post Comment</button>
            </form>
		</div>
	)
}