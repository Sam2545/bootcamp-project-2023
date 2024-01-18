import { IComment } from "@/database/blogSchema";
import style from "./commentPreview.module.css";

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: String){
	/*
		Implementation up to you...
	*/
    var date = time.toString()
    var date_array = date.split(" ")
    var new_date = date_array[1] + "-" + date_array[2] + "-" + date_array[3]
    return new_date
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment_section}>
            <h4 className={style.user}><span className={style.username}>{comment.user}</span> - {parseCommentTime(comment.time)}</h4>
            <p className={style.content}>{comment.comment}</p>
        </div>
    );
}

export default Comment;