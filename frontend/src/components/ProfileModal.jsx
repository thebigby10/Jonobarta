/* eslint-disable react/prop-types */
const ProfileModal = ({ isModalOpen, setIsModalOpen, user }) => {
    return (
      <div>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-96 p-6 bg-white rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-red-500"
              >
                ✖
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={user?.user_image}
                  alt="User"
                  className="w-24 h-24 rounded-full border-2 mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {user?.name}
                </h2>
                <p className="text-gray-600">Phone: {user?.phoneNumber}</p>
                <p className="text-gray-600">NID: {user?.nid}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProfileModal;
  