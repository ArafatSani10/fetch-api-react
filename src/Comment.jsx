import './Comment.css'
export default function Comment({comment}){
    let {name, body, email, id, postId} = comment
    return (
        <div className='comment'>
            <h3>name :{name} </h3>
            <h3>email :{email} </h3>
            <h3> body :{body} </h3>
            <p> id :{id} </p>
            <p> postId :{postId} </p>
        </div>
    )
}