import PostReport from "../Posts/PostReport/PostReport";

const LeftSidebar = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-md ">
        <PostReport/>
      </div>
      <div className="bg-white p-4 rounded-md ">filter form</div>
    </div>
  );
};

export default LeftSidebar;
