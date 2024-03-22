import { useLoaderData } from "react-router-dom";

const Userdetail = () => {
    const user =useLoaderData();
    const {name,website} = user;
    return (
        <div className="space-y-4">
            <h1>Detail About User</h1>
            <h2 className="text-3xl">Name : {name}</h2>
            <h2 className="text-3xl">Website : {website}</h2>
            
        </div>
    );
};

export default Userdetail;