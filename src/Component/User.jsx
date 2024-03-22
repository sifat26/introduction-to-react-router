import { Link } from "react-router-dom";
const User = ({user}) => {
    const {id,name,email,phone} = user;
    return (
        <div className="border-solid border-2 border-yellow-400 p-2 rounded-2xl space-y-4">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone: {phone}</p>
            <Link to ={`/user/${id}`}> <button>Click Me</button></Link>
            
        </div>
    );
};

export default User;