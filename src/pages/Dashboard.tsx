import { Link, Outlet } from "react-router-dom";
import ProtectedRoute from "../router/ProtectedRoute";

const Dashboard = () => {
  return (
    <ProtectedRoute>
    <div >
      
      {/* Main Content */}
      <main >
        <Outlet /> {/* Nested Routes Render Here */}
      </main>
      
    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
