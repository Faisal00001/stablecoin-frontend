import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <Link to={'/dashboard/overview'} className="btn btn-neutral">Check Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;