import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Expand, Minimize } from "lucide-react";
import HiveDetailBasicInfo from "./HiveDetailBasicInfo";
import axios from "axios";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";

// Utility to generate chart data
const generateRandomData = (min, max) =>
  Array.from({ length: 12 }, (_, i) => ({
    time: `${i + 1}:00`,
    value: Math.floor(Math.random() * (max - min + 1)) + min,
  }));

const HiveDetail = () => {
  const { hiveId } = useParams();
  const [hive, setHive] = useState(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const temperatureData = generateRandomData(25, 35);
  const humidityData = generateRandomData(10, 50);
  const weightData = generateRandomData(50, 65);
  const uvIndexData = generateRandomData(0, 10);
  const batteryData = generateRandomData(80, 100);

  const chartData = [
    { label: "Temperature", data: temperatureData, color: "#FF5733" },
    { label: "Humidity", data: humidityData, color: "#3498DB" },
    { label: "Weight", data: weightData, color: "#2ECC71" },
    { label: "UV Index", data: uvIndexData, color: "#F39C12" },
    { label: "Battery", data: batteryData, color: "#1ABC9C" },
  ];


  useEffect(() => {
    const fetchHive = async () => {
      const res = await axios.get(`${API_ENDPOINTS.BEEHIVES}/${hiveId}`, getAuthHeader());
      setHive(res.data);
    };
    fetchHive();
  }, [hiveId]);

  if (!hive) return null;

  return (
    <div className="p-6 bg-white min-h-screen w-full">
      <HiveDetailBasicInfo hiveId={hiveId} hive={hive} />

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center px-4 py-2 bg-amber-300 text-black rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsFullWidth(!isFullWidth)}
        >
          {isFullWidth ? (
            <Minimize size={18} className="mr-2" />
          ) : (
            <Expand size={18} className="mr-2" />
          )}
          {isFullWidth ? "Compact View" : "Full-Width View"}
        </button>
      </div>

      <div
        className={`mt-6 grid ${
          isFullWidth ? "grid-cols-1" : "grid-cols-2 gap-6"
        }`}
      >
        
          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Temperature Inside Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=3&__feature.dashboardSceneSolo"></iframe>
            </ResponsiveContainer>
          </div>
          
          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Humidity Inside Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=4&__feature.dashboardSceneSolo" ></iframe>
            </ResponsiveContainer>
          </div>
          
          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Temperature Outside Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=5&__feature.dashboardSceneSolo"></iframe>
            </ResponsiveContainer>
          </div>
          
          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Humidity Outside Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=6&__feature.dashboardSceneSolo"></iframe>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Sound Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&from=1747234143754&to=1747270312143&timezone=browser&showCategory=Standard%20options&panelId=1&__feature.dashboardSceneSolo" ></iframe>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Weight Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=7&__feature.dashboardSceneSolo" ></iframe>
            </ResponsiveContainer>
          </div>

          <div
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 w-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              UV Value Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=8&__feature.dashboardSceneSolo" ></iframe>
            </ResponsiveContainer>
          </div>

      </div>
    </div>
  );
};

export default HiveDetail;
