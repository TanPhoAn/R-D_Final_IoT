import * as React from "react";

export default function WeatherOverview({ stats }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center mt-3 w-full text-stone-900 max-md:max-w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex gap-10 justify-between items-center self-stretch p-4 my-auto bg-amber-300 rounded min-w-[240px] w-[304px]"
        >
          <div className="flex flex-col self-stretch my-auto w-[85px]">
            <div className="text-xs font-medium leading-loose">
              {stat.title}
            </div>
            <div className="mt-2.5 text-3xl font-semibold leading-none">
              {stat.value}
            </div>
          </div>
          <img
            loading="lazy"
            src={stat.icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[46px]"
          />
        </div>
      ))}
    </div>
  );
}
