import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Trash } from "lucide-react";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";
import HiveFormModal from "../components/HiveFormModal";

const HiveDetailBasicInfo = ({ hiveId, hive }) => {
  const navigate = useNavigate();
  const [selectedHive, setSelectedHive] = useState(hive);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteHive = async () => {
    try {
      await axios.delete(
        `${API_ENDPOINTS.BEEHIVES}/${hiveId}`,
        getAuthHeader()
      );
      alert("Hive deleted successfully!");
      navigate("/hivelist");
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to delete hive.";
      alert(message);
    }
  };

  if (!hive) return null;

  return (
    <div className="p-6 bg-white relative">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-700">
          Hive: {selectedHive.name}
        </h1>
        <div className="flex space-x-2">
          <button
            className="flex items-center px-3 py-1 bg-amber-300 text-gray-800 rounded-lg hover:bg-amber-400 transition"
            onClick={() => setEditModalOpen(true)}
          >
            <Edit size={18} className="mr-1" />
            Edit
          </button>
          <button
            className="flex items-center px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setShowConfirmPopup(true)}
          >
            <Trash size={18} className="mr-1" />
            Delete
          </button>
        </div>
      </div>
      <h2 className="text-xl text-gray-600 mt-1">{selectedHive.note || "No note"}</h2>

      {/* 🔔 Confirm Delete Modal */}
      {showConfirmPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-semibold text-gray-800">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mt-2">
              Are you sure you want to delete this hive?
            </p>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteHive}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {editModalOpen && (
        <HiveFormModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onHiveSaved={(updatedHive) => {
            setSelectedHive(updatedHive); // refresh or update local state
          }}
          hive={selectedHive}
        />
      )}
    </div>
  );
};

export default HiveDetailBasicInfo;
