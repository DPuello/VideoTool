import React from "react";
import BackButtonIcon from "./Assets/BackButtonIcon";
import { Link, useParams } from "react-router-dom";

const FOLDERS = [
  {
    title: "Afiliado Master",
    amount: 8,
    size: "7.3 GB",
    date: "30/may/2023",
  },
  {
    title: "BeMaster",
    amount: 21,
    size: "1.4 GB",
    date: "22/jun/2022",
  },
  {
    title: "Comizzión",
    amount: 10,
    size: "284 MB",
    date: "11/sep/2023",
  },
  {
    title: "Creador de Contenido",
    amount: 2,
    size: "4.3 GB",
    date: "21/jun/2023",
  },
  {
    title: "Exportados Wil",
    amount: 14,
    size: "500 MB",
    date: "5/abr/2023",
  },
  {
    title: "Afiliado Master",
    amount: 6,
    size: "7.3 GB",
    date: "30/may/2023",
  },
  {
    title: "BeMaster",
    amount: 30,
    size: "1.4 GB",
    date: "22/jun/2022",
  },
  {
    title: "Comizzión",
    amount: 2,
    size: "284 MB",
    date: "11/sep/2023",
  },
  {
    title: "Creador de Contenido",
    amount: 8,
    size: "4.3 GB",
    date: "21/jun/2023",
  },
  {
    title: "Exportados Wil",
    amount: 14,
    size: "500 MB",
    date: "5/abr/2023",
  },
];

function DetailHeader() {
  const { id } = useParams();
  const thisFolder = FOLDERS[id];

  return (
    <div className="flex gap-5 items-center">
      <Link to={"/"}>
        <BackButtonIcon width="40" className={"fill-main hover:brightness-90 transition-all duration-100"} />
      </Link>
      <h1 className="text-xl">
        Home /
        <span className="font-bold"> {thisFolder.title || "Detalle"}</span>
      </h1>
    </div>
  );
}

export default DetailHeader;
