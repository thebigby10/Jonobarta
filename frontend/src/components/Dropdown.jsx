import { useState } from "react";
import { IoTriangle } from "react-icons/io5";
import { useAuth } from "../providers/AuthProvider";
import ProfileModal from "./ProfileModal";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-white rotate-180 text-sm"
      >
        <IoTriangle size={10} />
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1">

            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsDropdownOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Profile
            </button>

            <button
              onClick={logout}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <ProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} user={user}/>
    </div>
  );
};

export default Dropdown;
