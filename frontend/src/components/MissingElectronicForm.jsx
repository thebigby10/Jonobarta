/* eslint-disable react/prop-types */
import { useState } from "react";
import { uploadImage } from "../utils/uploadImage";

const MissingElectronicForm = ({
  location,
  lat,
  lon,
  imageUrl,
  closeModal,
  category,
}) => {
  const [deviceType, setDeviceType] = useState("");
  const [brand, setBrand] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [details, setDetails] = useState("");
  const [eiin, setEiim] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [FIRImage, setFIRImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deviceType || !brand || !deviceName || !modelNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    const missingElectronicData = {
      deviceType,
      brand,
      deviceName,
      modelNumber,
      details,
      eiin,
      serialNumber,
      location: { lat, lon, locationDetails: location },
      imageUrl,
      FIRImage,
    };

    console.log(missingElectronicData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
      <h2 className="text-xl font-bold text-center">
        Missing Electronic Report
      </h2>

      {/* Device Type */}
      <label className="block">
        <span className="text-sm font-bold">Device Type *</span>
        <input
          type="text"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
          placeholder="Enter device type (e.g., Phone, Laptop)"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Brand */}
      <label className="block">
        <span className="text-sm font-bold">Brand *</span>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Enter brand"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Device Name */}
      <label className="block">
        <span className="text-sm font-bold">Device Name *</span>
        <input
          type="text"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          placeholder="Enter device name"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Model Number */}
      <label className="block">
        <span className="text-sm font-bold">Model Number *</span>
        <input
          type="text"
          value={modelNumber}
          onChange={(e) => setModelNumber(e.target.value)}
          placeholder="Enter model number"
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

      {/* EIIN */}
      <label className="block">
        <span className="text-sm font-bold">EIIN </span>
        <input
          type="text"
          value={eiin}
          onChange={(e) => setEiim(e.target.value)}
          placeholder="Enter EIIN"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Serial Number */}
      <label className="block">
        <span className="text-sm font-bold">Serial Number</span>
        <input
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          placeholder="Enter Serial Number"
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
        onChange={async (e) => {
          setLoading(true);
          try {
            setFIRImage(await uploadImage(e.target.files[0]));
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
      />

      <div>
        <p className="text-blue-400 my-1" hidden={!loading}>
          {loading && "Uploading image..."}
        </p>
        <p className="text-green-400 my-1" hidden={!FIRImage}>
          {FIRImage && "Upload success.."}
        </p>
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        type="submit"
        className="w-full bg-green-400 text-white font-bold py-2 rounded-lg"
      >
        Submit Report
      </button>
    </form>
  );
};

export default MissingElectronicForm;
