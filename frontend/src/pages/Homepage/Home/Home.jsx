import { useEffect, useState } from "react";
import LeftSidebar from "../../../components/LeftSidebar";
import Post from "../components/Post";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    const data = await axios.get("posts.json");
    setPosts(data.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div
      className="flex gap-4 px-4 pt-4 bg-gray-100"
      style={{ height: "calc(100vh - 48px)" }}
    >
      {/* Left Sidebar */}
      <div className="w-60 overflow-auto max-h-full">
        <LeftSidebar />
      </div>

      {/* Main Feed */}
      <div className="flex-1 space-y-4 overflow-auto max-h-full">
        {/* <div className="p-4 rounded-md bg-gray-50 ">
            <input
              type="text"
              placeholder="Start a post"
              className="w-full bg-gray-100 p-2 rounded-md border border-gray-300 focus:outline-none"
            />
          </div> */}
        {posts?.map((post, idx) => (
          <div key={idx}>
            <Post post = {post}/>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-60 erflow-auto max-h-full"></div>
    </div>
  );
};

export default Home;
