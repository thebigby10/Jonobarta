import { useState } from "react";
import PostReport from "../Posts/PostReport/PostReport";
import { uploadImage } from "../utils/uploadImage";

const LeftSidebar = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md ">
        <PostReport />
      </div>
      <div className="bg-white p-4 rounded-md ">
        <div>
          <h1 className="text-xl text-center font-semibold">Find a person</h1>
          <hr />
        </div>
        <form className="my-2">
          <div>
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full py-2 px-2 border border-gray-200 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">
              Add Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mb-1"
              onChange={async (e) => {
                setLoading(true);
                try {
                  setImage(await uploadImage(e.target.files[0]));
                  setLoading(false);
                } catch (error) {
                  console.log(error);
                } finally {
                  setLoading(false);
                }
              }}
            />
            {loading && (
              <p className="text-sm text-blue-500">Uploading Image...</p>
            )}
            {image && !loading && (
              <div>
                <img src={image} alt="" />
              </div>
            )}
          </div>

          <button
          disabled={loading}
          className={`block w-full p-2  text-white text-center rounded-sm bg-green-400`}
        >
          Find
        </button>
        </form>
      </div>
    </div>
  );
};

export default LeftSidebar;
