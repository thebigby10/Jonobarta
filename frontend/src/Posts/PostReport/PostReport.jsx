import { useState } from "react";
import PostReportForm from "../../components/PostReportForm";
import CategoryFormModal from "../../components/CategoryFormModal";

const PostReport = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCoordinates = () => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        location
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setLat(lat);
          setLon(lon);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!category || !location) {
      alert("Please fill in all fields.");
      return;
    }
    fetchCoordinates();
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <PostReportForm
        handleContinue={handleContinue}
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
        setImage={setImage}
      />

      {isModalOpen && (
        <CategoryFormModal
          category={category}
          location={location}
          lat={lat}
          lon={lon}
          image={image}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default PostReport;
