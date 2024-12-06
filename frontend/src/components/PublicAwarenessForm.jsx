/* eslint-disable react/prop-types */
import { useState } from "react";

const PublicAwarenessForm = ({ location, lat, lon, closeModal, category }) => {
  const [emergencyType, setEmergencyType] = useState("");
  const [customEmergencyType, setCustomEmergencyType] = useState("");
  const [message, setMessage] = useState("");

  const handleEmergencyTypeChange = (e) => {
    setEmergencyType(e.target.value);
    if (e.target.value !== "OTHER") {
      setCustomEmergencyType("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reportData = {
      location,
      lat,
      lon,
      emergencyType:
        emergencyType === "OTHER" ? customEmergencyType : emergencyType,
      message,
    };

    console.log(reportData);
    closeModal();
    // Further actions (like sending data to a backend) can go here
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
      <h2 className="text-xl font-bold text-center">Public Awareness report</h2>
      {/* Emergency Type Dropdown */}
      <label className="block">
        <span className="text-sm font-bold">Emergency Type *</span>
        <select
          value={emergencyType}
          onChange={handleEmergencyTypeChange}
          className="w-full border rounded-lg p-2"
          required
        >
          <option value="">Select Emergency Type</option>
          <option value="ACCIDENT">Accident</option>
          <option value="THEFT">Theft</option>
          <option value="MEDICAL">Medical Emergency</option>
          <option value="OTHER">Other</option>
        </select>
      </label>

      {/* Custom Emergency Type (only visible when "Other" is selected) */}
      {emergencyType === "OTHER" && (
        <label className="block">
          <span className="text-sm font-bold">
            Please Specify Emergency Type *
          </span>
          <input
            type="text"
            value={customEmergencyType}
            onChange={(e) => setCustomEmergencyType(e.target.value)}
            placeholder="Enter custom emergency type"
            className="w-full border rounded-lg p-2"
            required
          />
        </label>
      )}

      {/* Public Awareness Message */}
      <label className="block">
        <span className="text-sm font-bold">Public Awareness Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
          className="w-full border rounded-lg p-2 mb-2"
        ></textarea>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-400 text-white py-1 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default PublicAwarenessForm;
