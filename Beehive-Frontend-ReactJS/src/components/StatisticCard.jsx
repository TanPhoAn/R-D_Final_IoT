import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StatisticsCard({
  title,
  currentValue,
  unit,
  change,
  changeType,
  timeLabels = [],
  chartData = [], // New prop for dynamic chart data
}) {
  return (
    <div className="flex flex-col py-5 mx-auto w-full rounded-lg bg-orange-100 shadow-[0px_1px_1px_rgba(0,0,0,0.25)] max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-center max-w-full w-[448px]">
        <div className="flex flex-col justify-between self-start whitespace-nowrap min-h-[31px]">
          <div className="text-xs leading-3 text-zinc-400">Statistics</div>
          <div className="text-sm font-medium text-slate-800">{title}</div>
        </div>
        <div className="flex flex-col justify-between items-end min-h-[36px]">
          <div className="flex justify-center items-center text-xs font-medium text-stone-800">
            <div className="self-stretch my-auto">Current {currentValue}</div>
            <div className="self-stretch my-auto">{unit}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center shrink-0 mt-3.5 ml-3 max-w-full h-px border border-solid bg-orange-100 border-black w-[466px] max-md:mr-2" />

      {/* Chart Section */}
      <div className="w-full h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ff7300"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time Labels */}
      <div className="flex gap-1.5 justify-between items-center mt-7 mr-2.5 text-xs tracking-wide text-center text-gray-500 uppercase whitespace-nowrap min-h-[17px]">
        {timeLabels.length > 0 ? (
          timeLabels.map((label, index) => (
            <div key={index} className="self-stretch my-auto w-[30px]">
              {label}
            </div>
          ))
        ) : (
          <div>No Data Available</div>
        )}
      </div>
    </div>
  );
}
