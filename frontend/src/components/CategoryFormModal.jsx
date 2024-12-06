/* eslint-disable react/prop-types */

const CategoryFormModal = ({ category, location, lat, lon, image, closeModal }) => {
  const renderForm = () => {
    switch (category) {
      case "MISSING_PERSON":
        return <MissingPersonForm location={location} lat={lat} lon={lon} />;
      case "MISSING_ELECTRONIC":
        return <MissingElectronicForm location={location} lat={lat} lon={lon} />;
      case "CRIME":
        return <CrimeReportForm location={location} lat={lat} lon={lon} />;
      case "PUBLIC_AWARENESS":
        return <PublicAwarenessForm location={location} lat={lat} lon={lon} />;
      default:
        return <div>No form available for this category.</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Form for {category}</h2>
        {renderForm()}
      </div>
    </div>
  );
};

// Example Form Components
const MissingPersonForm = ({ location, lat, lon }) => (
  <form>
    <p>Location: {location}</p>
    <p>Coordinates: {lat}, {lon}</p>
    <input
      type="text"
      placeholder="Name of the person"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <input
      type="text"
      placeholder="Age"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <button
      type="submit"
      className="w-full bg-green-400 text-white py-1 rounded-lg"
    >
      Submit
    </button>
  </form>
);

const MissingElectronicForm = ({ location, lat, lon }) => (
  <form>
    <p>Location: {location}</p>
    <p>Coordinates: {lat}, {lon}</p>
    <input
      type="text"
      placeholder="Type of electronic item"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <input
      type="text"
      placeholder="Serial number"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <button
      type="submit"
      className="w-full bg-green-400 text-white py-1 rounded-lg"
    >
      Submit
    </button>
  </form>
);

const CrimeReportForm = ({ location, lat, lon }) => (
  <form>
    <p>Location: {location}</p>
    <p>Coordinates: {lat}, {lon}</p>
    <textarea
      placeholder="Describe the crime"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <button
      type="submit"
      className="w-full bg-green-400 text-white py-1 rounded-lg"
    >
      Submit
    </button>
  </form>
);

const PublicAwarenessForm = ({ location, lat, lon }) => (
  <form>
    <p>Location: {location}</p>
    <p>Coordinates: {lat}, {lon}</p>
    <textarea
      placeholder="Public awareness message"
      className="w-full border rounded-lg p-2 mb-2"
    />
    <button
      type="submit"
      className="w-full bg-green-400 text-white py-1 rounded-lg"
    >
      Submit
    </button>
  </form>
);

export default CategoryFormModal;
