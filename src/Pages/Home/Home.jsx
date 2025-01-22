import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="h-screen flex flex-col justify-center items-center">
                <Link to={'/dashboard/overview'} className="btn btn-neutral">Check Dashboard</Link>
                <Link to={'/login'} className="btn btn-primary mt-5">Check Login</Link>
                <Link to={'/register'} className="btn btn-accent mt-5 text-white">Check register</Link>
            </div>
        </div>
    );
};

export default Home;