import React from "react";
import LibraryIcon from "./Assets/LibraryIcon";
import CanTrashIcon from "./Assets/CanTrashIcon";
import FolderIcon from "../../Aside/Assets/FolderIcon";
import PlayIcon from "../../../Assets/PlayIcon";

function Header() {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex gap-8 h-7 items-center">
        <div className="flex gap-3 text-main font-semibold text-sm border-b-[3px] pb-1 cursor-pointer">
          <LibraryIcon width={"18"} className="fill-main" />
          Biblioteca
        </div>
        <div className="flex gap-3 relative font-medium text-sm border-b-[3px] border-transparent pb-1 cursor-pointer before:bg-black before:h-[3px] before:top-full before:absolute before:content-[''] before:transition-all before:duration-300 before:w-0 hover:before:w-full">
          <CanTrashIcon width={"13"} className="" />
          Papelera
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-3 bg-grayLight text-sm rounded-md py-3 px-4 cursor-pointer items-center transition-all duration-100 hover:brightness-95">
          <FolderIcon width={"18"} className="" />
          Nueva carpeta
        </div>
        <div className="flex gap-3 bg-main text-sm rounded-md py-3 px-4 cursor-pointer items-center text-white transition-all duration-100 hover:brightness-90">
          <PlayIcon width={"18"} className=" fill-white" />
          Nuevo video
        </div>
      </div>
    </div>
  );
}

export default Header;
