import { useEffect, useState } from "react";
import LeftSidebar from "../../../components/LeftSidebar";
import Post from "../components/Post";
import axios from "axios";
import MapComponent from "../../../components/MapComponent";

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
        {posts?.map((post, idx) => (
          <div key={idx}>
            <Post post = {post}/>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-60 erflow-auto max-h-full">
        <MapComponent/>
      </div>
    </div>
  );
};

export default Home;
