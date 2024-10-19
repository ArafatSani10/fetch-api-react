import { useEffect, useState } from "react"
import Comment from "./Comment";

export default function Comments(){
    let [comments, setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h3>Comments: {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }

        </div>
    )
}