import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment';

const ReplyComment = ({movieId, postId, postNumber, comment, Comments}) => {
    const [ childCommentNumber, setChildCommentNumber ] = useState(0);
    const [ openReply, setOpenReply ] = useState(false);

    const onClickViewMore = () => {
        setOpenReply(!openReply)
    }

    useEffect(() => {
        let commentNumber = 0;
        Comments.map((el) => {
            if(el.commentGroup === comment.id && el.depth === 1) {
                commentNumber++;
            }
        })
        setChildCommentNumber(commentNumber);
    }, [Comments])

    return (
        <>
            {childCommentNumber > 0 && (
                <div onClick={onClickViewMore}>
                    {openReply ? "▼ " : "▶ "}
                    {childCommentNumber}개의 댓글
                </div>
            )}
            {openReply && Comments.map((commentele, index) => (
                commentele.commentGroup === comment.id && commentele.depth === 1 ? (
                <div>
                    <SingleComment
                        key={index}
                        movieId={movieId}
                        postNumber={postNumber}
                        postId={postId}
                        comment={commentele}
                        Comments={Comments} />
                    <ReplyComment
                        key={index}
                        movieId={movieId}
                        postNumber={postNumber}
                        postId={postId}
                        comment={commentele}
                        Comments={Comments} />
                </div>
            ): (<div></div>)))}
        </>
    );
}

export default ReplyComment;