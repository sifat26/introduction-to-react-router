import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{title,body,id}=post;
    return (
        <div>
            <h2>Our Post</h2>
            <h2>{title}</h2>
            <p>{body}</p>
            {/* <Link to ={`/post/${id}`}> <button>Click Me</button></Link> */}

            
        </div>
    );
};

export default Post;