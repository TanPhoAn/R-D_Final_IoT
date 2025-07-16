import React from "react";
import StatisticsCard from "../components/StatisticCard";
import WeatherOverview from "../components/WeatherOverview";
import { FaHive, FaSun, FaTint } from "react-icons/fa"; // Import icons

const weatherStats = [
  { title: "Total of hives", value: "25", icon: <FaHive size={24} /> },
  { title: "UV Index", value: "3/10", icon: <FaSun size={24} /> },
  { title: "Humidity", value: "35%", icon: <FaTint size={24} /> },
];

const timeLabels = ["7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm", "9pm"];

const generateRandomData = () => {
  return timeLabels.map((label) => ({
    time: label,
    value: Math.floor(Math.random() * 50) + 10, // Random value between 10-60
  }));
};

function DashBoard() {
  const temperatureData = generateRandomData();
  const weightData = generateRandomData();

  return (
    <div className="overflow-hidden bg-white w-full">
      <div className="flex max-md:flex-col">
        <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 items-center self-start mt-9">
                <div className="self-stretch my-auto text-2xl font-bold text-stone-900">
                  Hello User
                </div>
                <div className="self-stretch my-auto text-xs font-medium text-stone-700 w-[165px]">
                  Thursday, 17th October, 2024
                </div>
              </div>

              <div className="flex flex-col p-3 mt-4 bg-orange-50 rounded max-md:max-w-full">
                <div className="flex flex-col w-full font-medium text-stone-900 max-md:max-w-full">
                  <div className="text-sm leading-none max-md:max-w-full">
                    Today's Local Weather
                  </div>
                  <div className="flex flex-wrap gap-10 justify-between items-start mt-2.5 w-full text-3xl max-md:max-w-full">
                    <div className="flex gap-2.5 min-h-[32px] min-w-[240px]">
                      <div className="my-auto">Sunny Cloudy</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d46c4406cf29286ebfa6a4842424e02418f1473d5ac53c104edc125832fd98"
                        alt=""
                        className="object-contain shrink-0 aspect-[1.19] w-[38px]"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ed75e035fbcdcf3b64c8685fe3a8f650775fcb94a2f0f80eda84313239a325"
                      alt="Temperature graph"
                      className="object-contain shrink-0 aspect-[1.25] w-[105px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-2 w-full max-md:max-w-full">
                  <div className="text-sm font-medium text-stone-800">
                    Overview
                  </div>
                  {/* Display Weather Stats with Icons */}
                  <div className="flex gap-5 mt-3">
                    {weatherStats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-yellow-400 rounded-lg w-1/3"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-800">
                            {stat.title}
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </span>
                        </div>
                        <div className="text-gray-700">{stat.icon}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* New Charts */}
              <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <iframe src="http://localhost:3000/d-solo/1c91addb-0497-4cd6-93f4-c2a5290d92e4/beehive-dash?orgId=1&timezone=browser&showCategory=Standard%20options&panelId=2&__feature.dashboardSceneSolo" width="1200" height="200"></iframe>         
                </div>
              </div>
              {/* End New Charts */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
