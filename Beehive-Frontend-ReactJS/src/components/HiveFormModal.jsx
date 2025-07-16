import { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";

export default function HiveFormModal({ isOpen, onClose, onHiveSaved, hive }) {
  const isEditMode = !!hive;

  const [name, setName] = useState("");
  const [queenBirthDate, setQueenBirthDate] = useState("");
  const [note, setNote] = useState("");
  const [deviceId, setDeviceId] = useState("");

  useEffect(() => {
    if (isEditMode) {
      setName(hive.name || "");
      setQueenBirthDate(hive.queen_birth_date?.substring(0, 10) || "");
      setNote(hive.note || "");
      setDeviceId(hive.device_id || "");
    } else {
      setName("");
      setQueenBirthDate("");
      setNote("");
      setDeviceId("");
    }
  }, [hive, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const payload = { name, queen_birth_date: queenBirthDate, note, device_id: deviceId };
      const tokenHeader = getAuthHeader();

      const response = isEditMode
        ? await axios.put(`${API_ENDPOINTS.BEEHIVES}/${hive._id}`, payload, tokenHeader)
        : await axios.post(API_ENDPOINTS.BEEHIVES, payload, tokenHeader);

      alert(`Hive ${isEditMode ? "updated" : "added"} successfully!`);
      if (onHiveSaved) onHiveSaved(response.data);
      onClose();
    } catch (error) {
      const message = error?.response?.data?.message || "Failed to save hive.";
      alert(message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-lg font-semibold">
          {isEditMode ? "Edit Hive" : "Add New Hive"}
        </h2>
        <p className="text-sm text-gray-500">
          {isEditMode ? "Update hive information" : "Please fill the information"}
        </p>

        {/* Form fields (same as before) */}
        <div className="mt-4">
          <label className="block text-sm font-medium">Hive’s Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">
            Queen Birth Date: <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={queenBirthDate}
            onChange={(e) => setQueenBirthDate(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Type something about hive..."
            className="w-full mt-1 p-2 border rounded-md"
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Device ID</label>
          <input
            type="text"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            placeholder="Enter Device ID"
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
          >
            {isEditMode ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
