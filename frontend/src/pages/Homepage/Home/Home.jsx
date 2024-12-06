const Home = () => {
    const arr = [1, 2, 3];
    return (
      <div
        className="flex gap-4 px-4 pt-4 bg-gray-100"
        style={{ height: "calc(100vh - 48px)" }}
      >
        {/* Left Sidebar */}
        <div className="w-60 overflow-auto max-h-full space-y-4"></div>
  
        {/* Main Feed */}
        <div className="flex-1 space-y-4 overflow-auto max-h-full">
          <div className="p-4 rounded-md bg-gray-50 ">
            <input
              type="text"
              placeholder="Start a post"
              className="w-full bg-gray-100 p-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          {arr.map((a, idx) => (
            <div
              key={idx}
              className="p-4 shadow-md rounded-md bg-white "
            >
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, excepturi.
              </p>
              <img
                src="https://source.unsplash.com/random/480x360/?business"
                alt="Post"
                className="w-full h-60 rounded-md object-cover mt-2"
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
          ))}
        </div>
  
        {/* Right Sidebar */}
        <div className="w-60 erflow-auto max-h-full"></div>
      </div>
    );
  };
  
  export default Home;
  