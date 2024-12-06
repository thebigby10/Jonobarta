/* eslint-disable react/prop-types */
const PostReportForm = ({
  handleContinue,
  category,
  setCategory,
  location,
  setLocation,
  setImage,
}) => {
  return (
    <form className="max-w-md mx-auto bg-white" onSubmit={handleContinue}>
      <h1 className="text-xl text-center font-semibold mb-1">Post a Report</h1>
      <hr className="mb-1" />

      <label className="block text-sm font-bold mb-2">Category</label>
      <select
        className="w-full border rounded-lg p-2 mb-1"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="MISSING_PERSON">Missing Person</option>
        <option value="MISSING_ELECTRONIC">Missing Electronic</option>
        <option value="MISSING_OTHERS">Missing Others</option>
        <option value="CRIME">Crime</option>
        <option value="PUBLIC_AWARENESS">Public Awareness</option>
      </select>

      <label className="block text-sm font-semibold mb-2">Location</label>
      <div className="flex items-center mb-1">
        <input
          type="text"
          className="flex-grow border rounded-lg p-2"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <label className="block text-sm font-semibold mb-2">Add Image</label>
      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mb-1"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white font-bold py-1 rounded-lg"
      >
        Continue
      </button>
    </form>
  );
};

export default PostReportForm;
