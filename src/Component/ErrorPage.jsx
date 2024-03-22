import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div>
            <h1>404</h1>
           
            <h3>{error.statusText || error.message}</h3>
            {
                error.status===404 && 
                <div>
                    <h3>Page Not Found</h3>
                    <Link to={"/"}><button>Home</button></Link>
                    
                </div>
                
            }
            
        </div>
    );
};

export default ErrorPage;