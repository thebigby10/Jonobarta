/* eslint-disable react/prop-types */
import { useState } from "react";

const MissingOthersForm = ({
  location,
  lat,
  lon,
  imageUrl,
  closeModal,
  category,
}) => {
  const [details, setDetails] = useState("");
  const [FIRImage, setFIRImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageUrl || !details) {
      alert("Please fill in all required fields.");
      return;
    }

    const missingItemData = {
      imageUrl,
      location: { lat, lon, locationDetails: location },
      details,
      FIRImage,
    };

    console.log(missingItemData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
      <h2 className="text-xl font-bold text-center">Missing Item Report</h2>

      {/* Image Preview */}
      <div>
        <p className="text-sm font-bold">Uploaded Image *</p>
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" className="w-full rounded-lg" />
        ) : (
          <p className="text-red-500 text-sm">No image provided</p>
        )}
      </div>

      {/* Details */}
      <label className="block">
        <span className="text-sm font-bold">Details *</span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Provide details about the missing item"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* FIR */}
      <label className="block text-sm font-semibold mb-2">Police FIR</label>
      <input
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 mb-1"
        onChange={(e) => setFIRImage(e.target.files[0])}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-400 text-white font-bold py-2 rounded-lg"
      >
        Submit Report
      </button>
    </form>
  );
};

export default MissingOthersForm;
