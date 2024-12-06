import { useState } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { id: 1, lat: 23.8103, lng: 90.4125, isSpecial: true }, // Dhaka (Red)
  { id: 1, lat: 23.5, lng: 90.9, isSpecial: true }, // Dhaka (Red)
  { id: 1, lat: 23.6, lng: 90.4125, isSpecial: true }, // Dhaka (Red)
  { id: 1, lat: 23.8103, lng: 90.4125, isSpecial: true }, // Dhaka (Red)
  { id: 2, lat: 22.3475, lng: 91.8123, isSpecial: true }, // Chittagong
  { id: 3, lat: 24.3636, lng: 88.6241, isSpecial: true }, // Rajshahi
  { id: 4, lat: 24.8949, lng: 91.8687, isSpecial: true }, // Sylhet
  { id: 5, lat: 22.8419, lng: 89.5632, isSpecial: true }, // Khulna
  { id: 6, lat: 23.4607, lng: 91.1809, isSpecial: true }, // Comilla
  { id: 7, lat: 22.701, lng: 90.3535, isSpecial: true }, // Barisal
  { id: 8, lat: 25.7439, lng: 89.2567, isSpecial: true }, // Rangpur
  { id: 9, lat: 21.4339, lng: 91.987, isSpecial: true }, // Cox's Bazar
  { id: 10, lat: 24.7471, lng: 90.4203, isSpecial: true }, // Mymensingh
];

const MapComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleExpandMap = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Small Map */}
      <div style={{ height: "300px", width: "100%" }}>
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={6}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Circle
              key={location.id}
              center={[location.lat, location.lng]}
              radius={20000} // Radius in meters
              pathOptions={{
                color: location.isSpecial ? "red" : "green",
              }}
            />
          ))}
        </MapContainer>
      </div>

      {/* Expand Button */}
      <button
        className="block w-full p-2 mt-2 text-white text-center rounded-sm bg-green-400"
        onClick={handleExpandMap}
      >
        Expand Map
      </button>

      {/* Modal for Full Map */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            style={{ width: "80%", height: "80%" }}
            onClick={(e) => e.stopPropagation()} 
          >
            <MapContainer
              center={[23.685, 90.3563]}
              zoom={6}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location) => (
                <Circle
                  key={location.id}
                  center={[location.lat, location.lng]}
                  radius={20000}
                  pathOptions={{
                    color: location.isSpecial ? "red" : "green",
                  }}
                />
              ))}
            </MapContainer>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
