import { Outlet } from "react-router-dom";
import Nav from "../../shared/Navbar/Nav";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen bg-gray-100">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
