import { useState } from "react";
import comments from "../../data/comments"; // dummy data
import CommentElement from "./CommentElement";

const Comment = ({ postId }) => {
  // TODO: comments를 저장하기 위한 state를 만들어주세요
  const [commentsLst, setCommentsLst] = useState(comments);
  // TODO: 새로운 댓글을 추가하기 위한 state를 만들어주세요
  const [commentInput, setCommentInput] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // alert("댓글 작성"); // add api call for creating comment
    // TODO: 댓글을 추가했으니 새로운 댓글을 저장하는 state를 초기화해야겠죠?
    const currDate = new Date().toISOString();
    const newComment = {
      id: Date.now(),
      content: commentInput,
      created_at: currDate,
      post: postId,
      author: {},
    };
    setCommentsLst([...commentsLst, newComment]);
    setCommentInput("");
  };

  const handleCommentDelete = (commentId) => {
    //    console.log(commentId);
    //    alert("댓글 삭제"); // add api call for deleting comment
    const filteredLst = commentsLst.filter(
      (comment) => comment.id !== commentId
    );
    setCommentsLst(filteredLst);
  };

  const handleEditComment = (commentId, edited) => {
    const filteredLst = commentsLst.map((comment) => {
      if (comment.id === commentId) {
        comment.content = edited;
      }
      return comment;
    });
    setCommentsLst(filteredLst);
  };

  return (
    <div className="w-full mt-5 self-start">
      <h1 className="text-3xl font-bold my-5">Comments</h1>
      {commentsLst.map((comment) => (
        <CommentElement
          key={comment.id}
          comment={comment}
          handleCommentDelete={handleCommentDelete}
          handleEditComment={handleEditComment}
        />
      ))}
      <form
        onSubmit={handleCommentSubmit}
        className="flex flex-row items-center justify-center mt-10 gap-2"
      >
        <div className="flex w-full h-12">
          <input
            className="input"
            type="text"
            placeholder="댓글을 입력해주세요"
            value={commentInput}
            onChange={(e) => {
              setCommentInput(e.target.value);
            }}
          ></input>
          <button type="submit" className="button ml-3 w-24">
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
