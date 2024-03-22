import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  //   console.log(posts);
  return (
    <div >
      <h2>Post : {posts.length}</h2>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
