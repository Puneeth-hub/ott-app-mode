import './index.css'

const CommentItem=props=>{
    const {commentDetails} = props 
        const {name, commentText} = commentDetails
return(
    <div>
        <li className='list-contianer'>
            {name && <p className='avatar'>{name[0].toUpperCase()}</p>}
            <div className='name-comment'>
                <p className='para-name'>{name}</p>
                <p className='comment-and-text'>{commentText}</p>
                
            </div>
        </li>
        <hr className='horizental-line'/>
    </div>
)
}
export default CommentItem