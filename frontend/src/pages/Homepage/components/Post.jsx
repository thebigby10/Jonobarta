/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="p-4 shadow-md rounded-md bg-white ">
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center space-x-2">
          <img
            src={post?.imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">{post?.name}</h3>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">...</button>
      </div>
      <p className="py-4 text-gray-700">Missing person {post?.name}</p>
      <img
        src={post?.imageUrl}
        alt="Post"
        className="w-full h-80 rounded-md object-cover mt-2"
      />
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        
      </div>
    </div>
  );
};

export default Post;
