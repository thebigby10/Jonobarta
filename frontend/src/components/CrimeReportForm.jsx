/* eslint-disable react/prop-types */
import { useState } from "react";
import { uploadImage } from "../utils/uploadImage";

const CrimeReportForm = ({
  location,
  lat,
  lon,
  imageUrl,
  closeModal,
  category,
}) => {
  const [incidentTime, setIncidentTime] = useState("");
  const [belongingType, setBelongingType] = useState("");
  const [suspect, setSuspect] = useState("");
  const [details, setDetails] = useState("");
  const [FIRImage, setFIRImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!incidentTime || !belongingType || !suspect) {
      alert("Please fill in all required fields.");
      return;
    }

    const crimeData = {
      incidentTime,
      belongingType,
      imageUrl,
      suspect,
      details,
      location: { lat, lon, locationDetails: location },
      FIRImage,
    };

    console.log(crimeData);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
      <h2 className="text-xl font-bold text-center">Crime Report</h2>

      {/* Incident Time */}
      <label className="block">
        <span className="text-sm font-bold">Incident Time *</span>
        <input
          type="datetime-local"
          value={incidentTime}
          onChange={(e) => setIncidentTime(e.target.value)}
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Belonging Type */}
      <label className="block">
        <span className="text-sm font-bold">Belonging Type *</span>
        <input
          type="text"
          value={belongingType}
          onChange={(e) => setBelongingType(e.target.value)}
          placeholder="Enter belonging type (e.g., electronics, money)"
          className="w-full border rounded-lg p-2"
          required
        />
      </label>

      {/* Suspect */}
      <label className="block">
        <span className="text-sm font-bold">Suspect (Optional)</span>
        <input
          type="text"
          value={suspect}
          onChange={(e) => setSuspect(e.target.value)}
          placeholder="Enter suspect's name or description"
          className="w-full border rounded-lg p-2"
        />
      </label>

      {/* Crime Details */}
      <label className="block">
        <span className="text-sm font-bold">Crime Description *</span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe the crime"
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

export default CrimeReportForm;
