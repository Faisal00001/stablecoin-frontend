import { Outlet } from "react-router-dom";
import Siderbar from "../components/common/Sidebar/Siderbar";

const Dashboard = () => {

    return (
        <div className='flex h-screen  overflow-hidden'>
            <Siderbar></Siderbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;