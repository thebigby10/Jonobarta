import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import Dropdown from "../../components/Dropdown";

const Nav = () => {
  const { user } = useAuth();
  return (
    <header className="shadow-sm px-8 py-2 bg-green-400">
      <div className="flex justify-between mx-auto">
        <div className="flex">
          <Link to={"/"}>
            <h1 className="font-bold text-white text-2xl">Jonobarta</h1>
          </Link>
        </div>
        <div className="items-center cursor-pointer">
          {user ? (
            <div className="flex items-center gap-2">
                <h1 className="text-white">{user?.name}</h1>
                <Dropdown/>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="px-2 py-1 text-sm bg-white  font-semibold  rounded-sm">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
