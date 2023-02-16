import { useState } from "react";
import { v4 as uuvidv4 } from "uuid";
import CommentItem from '../CommentItem'

import './index.css'

const Comments = () => {
    const [name, setName] = useState('')
    const [commentText, setCommentText] = useState('')
    const [commentsList, setCommentsList] = useState([])


    const onChangeName=event=>setName(event.target.value)
    const onchangeCommentText= event => setCommentText(event.target.value)

    const onAddComment=event=>{
        event.preventDefault()
        const newComment= {
            id:uuvidv4(),
            name,
            commentText,
        }
        setCommentsList(prevCommentsList=>[...prevCommentsList, newComment])
        setName('')
        setCommentText('')
    }
    return(
        <div className="contianer">
            <p className="title">Comments</p> 
            <form onSubmit={onAddComment} className='form-contianer'>
                <input type='text' className="input-values" placeholder="Your name" 
                value={name} onChange={onChangeName}/>
                <textarea  className='area-text' rows='6' placeholder="Your Comment" 
                value={commentText} onChange={onchangeCommentText}/>
                <button type='submit' className="button">Submit</button>

            </form>
            <ul className="list-items">
                {commentsList.map(eachComment =>(
                    <CommentItem key={eachComment.id} commentDetails={eachComment}/>
                ))}
            </ul>
        </div>
    )
}
export default Comments