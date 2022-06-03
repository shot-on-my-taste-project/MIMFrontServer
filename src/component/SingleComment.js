import React from 'react'
import Comment from './Comment';

const SingleComment = ({movieId, postId, postNumber, comment, Comments}) => {
    return (
        <>
            <Comment 
            key={comment.id}
            movieId={movieId}
            postNumber={postNumber}
            postId={postId}
            Comments = {Comments}
            comment={comment}
            />
        </>
    );
}

export default SingleComment;