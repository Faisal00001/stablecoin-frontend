import { Outlet } from "react-router-dom";
import Siderbar from "../components/common/Sidebar/Siderbar";
import Header from "../components/common/Header/Header";

const Dashboard = () => {

    return (
        <div className="h-screen flex flex-col">
            <div>
                <Header title="NODE" />
            </div>
            <div className="flex flex-1 overflow-hidden">
                <Siderbar />
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;