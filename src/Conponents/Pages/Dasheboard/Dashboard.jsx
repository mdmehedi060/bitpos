
import LeftDashboard from "./LeftDashboard/LeftDashboard";
import MiddleDashboard from "./MiddleDashboard/MiddleDashboard";
import RightDashboard from "./RightDashboard/RightDashboard";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-80">
                <LeftDashboard></LeftDashboard>
            </div>
            <div className="w-full">
                <MiddleDashboard></MiddleDashboard>
            </div>
            <div className="w-96">
                <RightDashboard></RightDashboard>
            </div>
        </div>
    );
};

export default Dashboard;