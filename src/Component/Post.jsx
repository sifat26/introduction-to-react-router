import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    console.log(post);
    const{title,body,id}=post;
    const navigate=useNavigate();
    const handlePostDetails=()=>{
            navigate(`/post/${id}`);
    }
    return (
        <div className="border-solid border-2 border-yellow-400 px-2 rounded-2xl space-y-4">
            <h2>{id}</h2>
            <h2>{title}</h2>
            
            <Link to ={`/post/${id}`}> <button>Click Me</button></Link>
            <button onClick={handlePostDetails}>Show</button>

            
        </div>
    );
};

export default Post;