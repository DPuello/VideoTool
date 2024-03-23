import React from "react";
import SearchIcon from "./Assets/SearchIcon";

function Search() {
  return (
    <div className="p-1 px-4 border-gray border-[1px] flex rounded-lg gap-3 h-10 w-[35rem]">
      <SearchIcon className={"fill-grayDark"} />
      <div className="w-[2px] bg-grayDark " />
      <input
        type="text"
        placeholder="Buscar Video"
        className="placeholder:text-[13px] placeholder:text-grayDark w-full focus:outline-none"
      />
    </div>
  );
}

export default Search;
