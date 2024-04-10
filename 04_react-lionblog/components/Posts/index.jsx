import { Link } from "react-router-dom";

export const SmallPost = ({ post }) => {
  return (
    <div className="w-64 relative block group py-10 px-8 mr-5 my-5 ring-8 ring-transparent border-2 border-box border-white hover:bg-orange-400 hover:text-black hover:border-transparent hover:ring-orange-200 rounded-xl font-medium">
      <Link to={`${post.id}`} className="font-extrabold text-2xl truncate">
        {post.title}
      </Link>
      <p className="mt-2">{post.author.username}</p>
      <div className="flex flex-wrap mt-5">
        {post.tags.map((tag) => (
          <span key={tag.id} className="tag m-1">
            #{tag.content}
          </span>
        ))}
      </div>
      <div>{post.like_users.length > 0 && `❤️ ${post.like_users.length}`}</div>
    </div>
  );
};

export const BigPost = ({ post }) => {
  return (
    <div className="bg-orange-400 w-[50vw] h-[30vh] mt-7 mb-5 rounded-xl border-orange-300 border-4">
      <div className="text-black flex flex-col m-6">
        <h3 className="text-xl mb-4 font-bold">{`${post.author.username}의 ${post.title}`}</h3>
        <p className="border-black border-2 rounded-xl p-2 text-lg mb-4">
          {post.content}
        </p>
        <div className="flex flex-wrap mt-5">
          {post.tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-black text-white rounded-2xl p-2 text-xs ml-2"
            >
              #{tag.content}
            </span>
          ))}
        </div>
        <div className="mt-4">
          {post.like_users.length > 0 && `❤️ ${post.like_users.length}`}
        </div>
      </div>
    </div>
  );
};
