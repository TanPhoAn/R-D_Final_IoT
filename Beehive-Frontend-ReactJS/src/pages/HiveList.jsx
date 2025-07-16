import React, { useEffect, useState } from "react";
import HiveCard from "../components/HiveCard";
import HiveFormModal from "../components/HiveFormModal";
import { Plus } from "lucide-react";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";

const HiveList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hives, setHives] = useState([]);

  // Fetch hives on load
  useEffect(() => {
    const fetchHives = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          API_ENDPOINTS.BEEHIVES,
          getAuthHeader(token)
        );
        setHives(response.data);
      } catch (error) {
        console.error("Failed to fetch hives:", error);
      }
    };

    fetchHives();
  }, []);

  // Callback to refresh hive list after adding a new hive
  const handleHiveAdded = (newHive) => {
    setHives((prev) => [...prev, newHive]);
  };

  return (
    <div className="p-6 bg-white">
      {/* Title and Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Hives List</h1>
        <button
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={18} className="mr-2" />
          Add new hive
        </button>
      </div>

      {/* Add Hive Modal */}
      <HiveFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onHiveAdded={handleHiveAdded}
      />

      {/* Hive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hives.map((hive) => (
          <HiveCard key={hive.id} hiveId={hive.id} hive={hive} />
        ))}
      </div>
    </div>
  );
};

export default HiveList;
