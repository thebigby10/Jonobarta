import { useState } from "react";
import PostReportForm from "../../components/PostReportForm";

const PostReport = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ lat, lon }, category, image);
    // Add your submission logic here
  };

  return (
    <div>
      <PostReportForm
        handleSubmit={handleSubmit}
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
        setImage={setImage}
      />
    </div>
  );
};

export default PostReport;
