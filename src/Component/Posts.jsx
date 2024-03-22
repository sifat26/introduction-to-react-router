import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      {posts.map((post) => {
        <Post key={post.id} post={post}></Post>;
      })}
    </div>
  );
};

export default Posts;
