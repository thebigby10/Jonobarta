/* eslint-disable react/prop-types */
const Post = ({post}) => {

  return (
    <div className="p-4 shadow-md rounded-md bg-white ">
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center space-x-2">
          <img
            src="https://source.unsplash.com/random/40x40/?profile"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">John Doe</h3>
            <span className="text-sm text-gray-500">6 min ago</span>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">...</button>
      </div>
      <p className="py-4 text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
        excepturi.
      </p>
      <img
        src={post?.imageUrl}
        alt="Post"
        className="w-full rounded-md object-cover mt-2"
      />
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <span>👍</span> <span>Like</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <span>💬</span> <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <span>🔄</span> <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
