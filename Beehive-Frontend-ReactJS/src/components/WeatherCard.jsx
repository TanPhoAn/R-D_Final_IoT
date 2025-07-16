import * as React from "react";
import WeatherOverviewCard from "./WeatherOverviewCard";

const overviewData = [
  {
    title: "Total of hives",
    value: "25",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/264320e24f12d6d6cbff5f3426919932957b52acd0bbf78fc76aab74ab80f38f?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    imageAlt: "Hive count indicator",
  },
  {
    title: "UV Index",
    value: "3/10",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2043e86cdef7102886a7959b6894e64188bc102ed8494ce21dff7fe78b367193?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    imageAlt: "UV index meter",
  },
  {
    title: "Humidity",
    value: "35%",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3806358688325f6743e5affe4aa88cb92d492deccf9db90c4803259047d6da1a?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    imageAlt: "Humidity indicator",
  },
];

function WeatherCard() {
  return (
    <div className="flex flex-col p-3 mt-4 bg-orange-100 rounded max-md:max-w-full">
      <div className="flex flex-col w-full font-medium text-stone-900 max-md:max-w-full">
        <div className="text-sm leading-none max-md:max-w-full">
          Today's Local Weather
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start mt-2.5 w-full text-3xl max-md:max-w-full">
          <div className="flex gap-2.5 min-h-[32px] min-w-[240px]">
            <div className="my-auto">Sunny Cloudy</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d46c4406cf29286ebfa6a4842424e02418f1473d5ac53c104edc125832fd98?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
              alt="Weather condition icon"
              className="object-contain shrink-0 aspect-[1.19] w-[38px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6ed75e035fbcdcf3b64c8685fe3a8f650775fcb94a2f0f80eda84313239a325?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
            alt="Temperature graph"
            className="object-contain shrink-0 aspect-[1.25] w-[105px]"
          />
        </div>
      </div>
      <div className="flex flex-col mt-2 w-full max-md:max-w-full">
        <div className="text-sm font-medium text-stone-800">Overview</div>
        <div className="flex flex-wrap gap-5 justify-between items-center mt-3 w-full text-stone-900 max-md:max-w-full">
          {overviewData.map((item, index) => (
            <WeatherOverviewCard
              key={index}
              title={item.title}
              value={item.value}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
