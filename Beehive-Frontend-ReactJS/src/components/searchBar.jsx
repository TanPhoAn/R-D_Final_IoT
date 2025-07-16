import * as React from "react";

export function SearchBar() {
  return (
    <form className="flex gap-2 items-center self-stretch px-3 py-1 my-auto text-xs font-medium tracking-normal leading-relaxed whitespace-nowrap rounded border border-solid border-neutral-300 min-h-[24px] min-w-[240px] text-neutral-400 w-[410px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09a082f31199ab25643da9ab6ee3dabe1964850a36660d5d7d25aedabd41a19?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <input
        type="search"
        id="searchInput"
        placeholder="Search"
        className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
      />
    </form>
  );
}
