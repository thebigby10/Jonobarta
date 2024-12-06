/* eslint-disable react/prop-types */

import CrimeReportForm from "./CrimeReportForm";
import MissingElectronicForm from "./MissingElectronicForm";
import MissingOthersForm from "./MissingOthersForm";
import MissingPersonForm from "./MissingPersonForm";
import PublicAwarenessForm from "./PublicAwarenessForm";

const CategoryFormModal = ({
  category,
  location,
  lat,
  lon,
  image,
  closeModal,
}) => {
  const renderForm = () => {
    switch (category) {
      case "MISSING_PERSON":
        return (
          <MissingPersonForm
            imageUrl={image}
            lat={lat}
            lon={lon}
            closeModal={closeModal}
            location={location}
            category={category}
          />
        );
      case "MISSING_ELECTRONIC":
        return (
          <MissingElectronicForm
            imageUrl={image}
            lat={lat}
            lon={lon}
            closeModal={closeModal}
            location={location}
            category={category}
          />
        );
      case "MISSING_OTHERS":
        return (
          <MissingOthersForm
            imageUrl={image}
            lat={lat}
            lon={lon}
            closeModal={closeModal}
            location={location}
            category={category}
          />
        );
      case "CRIME":
        return (
          <CrimeReportForm
            imageUrl={image}
            lat={lat}
            lon={lon}
            closeModal={closeModal}
            location={location}
            category={category}
          />
        );
      case "PUBLIC_AWARENESS":
        return (
          <PublicAwarenessForm
            location={location}
            lat={lat}
            lon={lon}
            category={category}
            closeModal={closeModal}
          />
        );
      default:
        return <div>No form available for this category.</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          ✖
        </button>
        {renderForm()}
      </div>
    </div>
  );
};

export default CategoryFormModal;
