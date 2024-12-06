/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeeMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 shadow-md rounded-md bg-white">
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center space-x-2">
          <img
            src={post?.imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium">{post?.name}</h3>
            <p className="text-sm">6 mins ago</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">...</button>
      </div>
      <p className="py-4 text-gray-700">
        {post?.details}{" "}
        <button
          className="font-bold text-blue-600 hover:underline"
          onClick={handleSeeMoreClick}
        >
          see more
        </button>
      </p>
      <img
        src={post?.imageUrl}
        alt="Post"
        className="w-full h-80 rounded-md object-cover mt-2"
      />

      {isModalOpen && (
        <Modal
          post={{
            missing_person_info_id: "f34a16d4-57d8-44a0-a11f-914abc3e5674",
            post_id: {
              post_title: "Missing Child - Sarah Khan",
              post_image_url: "https://example.com/missing_post_image.jpg",
              user_id: 2,
            },
            name: "Sarah Khan",
            age: 6,
            image_url:
              "https://i.guim.co.uk/img/media/d6ebaf76396bb73e4fb8ea9d5316b2498c4992a6/0_273_4211_2526/master/4211.jpg?width=465&dpr=1&s=none&crop=none",
            image_vector: 54321,
            height: 100,
            gender: "Female",
            hair_color: "Brown",
            dress: "Pink Dress with White Shoes",
            location_id: {
              latitude: 23.8103,
              longitude: 90.4125,
              address: "Dhaka, Bangladesh",
            },
            created_at: "2024-12-06T10:00:00Z",
            last_seen: "2024-12-06T09:00:00Z",
            details:
              "Sarah Khan, a 6-year-old girl, was last seen near the Dhaka Zoo wearing a pink dress and white shoes.",
            contactInfo: {
                name: "Riyad Hosen",
                phoneNumber: "01827885889",
                NID: "3333333333"
            }
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Post;
