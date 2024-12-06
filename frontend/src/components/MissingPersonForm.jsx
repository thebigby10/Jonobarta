/* eslint-disable react/prop-types */
import { useState } from "react";

const MissingPersonForm = ({
  location,
  lat,
  lon,
  imageUrl,
  closeModal,
  category,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [dress, setDress] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [details, setDetails] = useState("");
  const [gender, setGender] = useState("");
  const [FIRImage, setFIRImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !imageUrl || !dress || !gender) {
      alert("Please fill in all required fields.");
      return;
    }

    const missingPersonData = {
      name,
      age,
      imageUrl,
      height,
      hairColor,
      dress,
      location: { lat, lon, locationDetails: location },
      lastSeen,
      details,
      gender,
      FIRImage,
    };

    console.log(missingPersonData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
      <h2 className="text-xl font-bold text-center">Missing Person Report</h2>

      {/* Name */}
      <label className="block">
        <span className="text-sm font-bold">Name *</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Age */}
      <label className="block">
        <span className="text-sm font-bold">Age *</span>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Image Preview */}
      <div>
        <p className="text-sm font-bold">Uploaded Image *</p>
        {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" className="w-full rounded-lg" />
        ) : (
          <p className="text-red-500 text-sm">No image provided</p>
        )}
      </div>

      {/* Height */}
      <label className="block">
        <span className="text-sm font-bold">Height (Optional)</span>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height (in cm)"
          className="w-full border rounded-lg p-2"
        />
      </label>

      {/* Hair Color */}
      <label className="block">
        <span className="text-sm font-bold">Hair Color (Optional)</span>
        <input
          type="text"
          value={hairColor}
          onChange={(e) => setHairColor(e.target.value)}
          placeholder="Enter hair color"
          className="w-full border rounded-lg p-2"
        />
      </label>

      {/* Dress */}
      <label className="block">
        <span className="text-sm font-bold">Dress *</span>
        <input
          type="text"
          value={dress}
          onChange={(e) => setDress(e.target.value)}
          placeholder="Enter dress description"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Gender */}
      <label className="block">
        <span className="text-sm font-bold">Gender *</span>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Female"}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={(e) => setGender(e.target.value)}
              checked={gender === "Other"}
            />
            Other
          </label>
        </div>
      </label>

      {/* Last Seen */}
      <label className="block">
        <span className="text-sm font-bold">Last Seen (Date & Time)</span>
        <input
          type="datetime-local"
          value={lastSeen}
          onChange={(e) => setLastSeen(e.target.value)}
          className="w-full border rounded-lg p-2"
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

      {/* Details */}
      <label className="block">
        <span className="text-sm font-bold">Additional Details (Optional)</span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Provide any additional details"
          className="w-full border rounded-lg p-2"
        ></textarea>
      </label>

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

export default MissingPersonForm;