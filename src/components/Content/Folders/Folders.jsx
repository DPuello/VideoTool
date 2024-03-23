import React from "react";
import Search from "../../Search/Search";
import List from "../../List/List";
import FolderIcon from "../../Aside/Assets/FolderIcon";
import Header from "./Header";

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

function Folders() {
  return (
    <>
      <Header />
      <Search />
      <List data={FOLDERS} icon={<FolderIcon className={"fill-main"} />} />
    </>
  );
}

export default Folders;
