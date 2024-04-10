import { useState, useEffect } from "react";

const CommentElement = (props) => {
  /* TODO: props 받기
       Hint: src/components/Comment/index.jsx에서 어떠한 props를 넘겨주는지 확인해보세요! */
  let comment = props.comment;
  let handleCommentDelete = props.handleCommentDelete;
  let handleEditComment = props.handleEditComment;

  /* TODO: 댓글을 수정하는 input의 value를 관리하기 위한 state 작성
       Hint: 댓글의 내용을 저장하는 state와 수정 중인지 여부를 저장하는 state를 따로 만드는 게 좋겠죠? */
  const [commentEditInput, setCommentEditInput] = useState("");
  const [onEdit, setOnEdit] = useState(false);

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  useEffect(() => {
    // add api call to check if user is the author of the comment
    //    console.log(props.comment.content);
  }, []);

  return (
    <div className="w-full flex flex-row justify-between items-center mb-5">
      <div className="w-3/4 flex flex-col gap-1">
        {onEdit ? (
          <input
            type="text"
            className="input"
            value={commentEditInput}
            onChange={(e) => {
              setCommentEditInput(e.target.value);
            }}
          />
        ) : (
          <p>{comment.content}</p>
        )}

        <span className="text-base text-gray-300">
          {year}.{month}.{day}
        </span>
      </div>

      <div className="flex flex-row items-center gap-3">
        {onEdit ? (
          <div className="pb-6">
            <button
              className="mr-2"
              onClick={() => {
                setOnEdit(false);
                setCommentEditInput(comment.content);
              }}
            >
              취소
            </button>
            <button
              onClick={() => {
                setOnEdit(false);
                handleEditComment(comment.id, commentEditInput);
              }}
            >
              완료
            </button>
          </div>
        ) : (
          <div>
            <button
              className="mr-2"
              onClick={() => {
                handleCommentDelete(comment.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                setOnEdit(true);
                setCommentEditInput(comment.content);
              }}
            >
              수정
            </button>
          </div>
        )}{" "}
      </div>
    </div>
  );
};
export default CommentElement;
