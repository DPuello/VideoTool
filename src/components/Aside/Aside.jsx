import React, { useState } from "react";
import Logo from "../../Assets/Logo";
import DashboardIcon from "./Assets/DashboardIcon";
import FolderIcon from "./Assets/FolderIcon";
import PlayIcon from "../../Assets/PlayIcon";
import AnalyticsIcon from "./Assets/AnalyticsIcon";
import ConfigurationIcon from "./Assets/ConfigurationIcon";

const OPTIONS = [
  {
    title: "Dashboard",
    icon: <DashboardIcon width="20" />,
    active: <DashboardIcon fill="white" width="20" />,
  },
  {
    title: "Videos",
    icon: <FolderIcon width="20" />,
    active: <FolderIcon fill="white" width="20" />,
  },
  {
    title: "Player",
    icon: <PlayIcon width="20" />,
    active: <PlayIcon fill="white" width="20" />,
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon width="20" />,
    active: <AnalyticsIcon fill="white" width="20" />,
  },
  {
    title: "Configuraciones",
    icon: <ConfigurationIcon width="20" />,
    active: <ConfigurationIcon fill="white" width="20" />,
  },
];

function Aside() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="bg-white flex flex-col justify-between p-3 pb-16 pt-8 rounded-lg">
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="py-5">
          <Logo width="55" className="fill-main cursor-pointer" />
        </div>

        <div className="flex flex-col gap-7 w-full pr-4">
          {OPTIONS.map((option, index) => (
            <div
              className={`flex gap-5 px-5 py-2 rounded-lg cursor-pointer transition-all duration-100 ${
                index == selected ? "bg-main text-white" : "hover:bg-grayLight"
              }`}
              onClick={() => setSelected(index)}
            >
              {index == selected ? option.active : option.icon}
              {option.title}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-grayLight w-full rounded-xl p-3 flex flex-col gap-4">
        <div className="py-2">
          <h3 className="font-semibold text-[14px]">Mi Plan - Plus</h3>
          <p className="font-medium text-[10px] italic">
            El uso se renueva el: 3-may-23
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 justify-between">
            <p className="text-xs font-medium">Almacenamiento</p>
            <p className="text-[9px]">25.5 GB / 1 TB</p>
          </div>
          <div className="bg-[#DEDEFF] h-[5px] rounded-full overflow-hidden">
            <div className="bg-main h-full w-[75%] rounded-full" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 justify-between">
            <p className="text-xs font-medium">Banda Mensual</p>
            <p className="text-[9px]">3.4 GB / 5 TB</p>
          </div>
          <div className="bg-[#DEDEFF] h-[5px] rounded-full overflow-hidden">
            <div className="bg-main h-full w-[55%] rounded-full" />
          </div>
        </div>

        <div className="bg-main text-white rounded-full text-[12px] p-1 px-3 w-fit mt-2 cursor-pointer">
          Administrar Plan
        </div>
      </div>
    </div>
  );
}

export default Aside;
