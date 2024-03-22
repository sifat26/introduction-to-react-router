import { useLoaderData, useNavigate } from "react-router-dom";

const Postdetail = () => {
    const details=useNavigate();
    const post=useLoaderData();
    const {title,body}=post;
   const handleBack=()=>{ 
    details(-1)
   }
    
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={handleBack}>Go Back</button>

            
        </div>
    );
};

export default Postdetail;