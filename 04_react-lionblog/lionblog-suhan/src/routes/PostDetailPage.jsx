import { BigPost } from "../components/Posts";
import { useNavigate, useParams } from "react-router-dom";
import posts from "../data/posts";

const PostDetailPage = () => {
  const params = useParams();
  const nav = useNavigate();
  const post = posts.find((post) => post.id === parseInt(params.postId));
  return (
    <div className="flex flex-col items-center gap-5 mb-8">
      <BigPost key={post.id} post={post} />
      <div className="flex flex-row items-center gap-5 mb-8">
        <button
          type="edit"
          onClick={() => {
            nav(`/${params.postId}/edit`);
          }}
          className="button mt-7"
        >
          수정
        </button>
        <button
          type="submit"
          onClick={() => {
            alert("삭제");
            nav("/");
          }}
          className="button mt-7"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default PostDetailPage;
