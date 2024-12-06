/* eslint-disable react/prop-types */
const Modal = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center border-b">
          <h2 className="text-lg font-bold text-gray-800">
            Missing Person Details
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="mt-4">
          <img
            src={post?.image_url}
            alt={post?.name}
            className="w-full h-60 object-cover rounded-md"
          />
          <h3 className=" text-xl font-semibold">{post?.name}</h3>
          <p className="text-gray-600">Age: {post?.age}</p>
          <p className="text-gray-600">Gender: {post?.gender}</p>
          <p className="text-gray-600">Hair Color: {post?.hair_color}</p>
          <p className="text-gray-600">Height: {post?.height} cm</p>
          <p className="text-gray-600">Last Seen: {post?.last_seen}</p>
          <p className="text-gray-600">Dress: {post?.dress}</p>
          <p className="text-gray-600 mt-2">
            Location: {post?.location_id?.address} (
            {post?.location_id?.latitude}, {post?.location_id?.longitude})
          </p>
          <p className="mt-4 text-gray-800">{post?.details}</p>
        </div>
        <div className="my-2">
          <h1 className="font-semibold text-center text-2xl">Contact Info</h1>
          <hr />
          <div className="flex justify-between items-start">
            <div>
              <h1>Name: {post?.contactInfo?.name}</h1>
              <h1>Phone Number: {post?.contactInfo?.phoneNumber}</h1>
              <h1>NID Number: {post?.contactInfo?.NID}</h1>
            </div>
            <div>
              <h1 className="text-white bg-green-400 px-4 py-1 text-sm rounded-md">VERIFIED</h1>
            </div>
          </div>
        </div>
        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
