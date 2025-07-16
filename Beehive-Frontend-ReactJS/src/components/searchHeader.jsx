import * as React from "react";
import { SearchBar } from "./searchBar";
import { IconGroup } from "./iconGroup";

export function SearchHeader() {
  return (
    <div className="flex flex-wrap shadow-sm justify-end gap-5 items-center py-2 pr-6 w-full bg-white shadow-[0px_1px_4px_rgba(52,51,48,0.2)] max-md:pr-5 max-md:max-w-full">
      <SearchBar />
      <IconGroup />
    </div>
  );
}
