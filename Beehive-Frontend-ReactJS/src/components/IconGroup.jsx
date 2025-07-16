import * as React from "react";

export function IconGroup() {
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b8155a7adabf78655f005319c25489bffcdf9fddc9b592661ead43e338b0a9a?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
      alt: "",
      className: "",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dede75e4649b4107f3c5f40bc4e039d163ff05cb044ecce4121f927b9c0437f?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
      alt: "",
      className: "rounded-[32px]",
    },
  ];

  return (
    <div className="flex gap-3.5 items-center self-stretch my-auto">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className={`object-contain shrink-0 self-stretch my-auto w-5 aspect-square ${icon.className}`}
        />
      ))}
    </div>
  );
}
