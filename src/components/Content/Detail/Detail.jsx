import React from "react";
import List from "../../List/List";
import PlayIcon from "../../../Assets/PlayIcon";
import DetailHeader from "./DetailHeader";

const VIDEOS = [
  {
    title: "Entrenamiento.mp4",
    duration: "04:11:37",
    type: "video",
    size: "7.3 GB",
    date: "30/may/2023",
  },
  {
    title: "Salida-al-mercado-versión nueva.mp4",
    duration: "47:55",
    type: "video",
    size: "1.4 GB",
    date: "22/jun/2022",
  },
  {
    title: "Como-cerrar-una-venta.mp4",
    duration: "10:12",
    type: "video",
    size: "284 MB",
    date: "11/sep/2023",
  },
  {
    title: "Crea-un-ticket-valioso.mp4",
    duration: "03:50:22",
    type: "video",
    size: "4.3 GB",
    date: "21/jun/2023",
  },
  {
    title: "Conquista-el-mercado-digital.mp4",
    duration: "5:00",
    type: "video",
    size: "500 MB",
    date: "5/abr/2023",
  },
  {
    title: "Entrenamiento.mp4",
    duration: "04:11:37",
    type: "video",
    size: "7.3 GB",
    date: "30/may/2023",
  },
  {
    title: "Salida-al-mercado-versión nueva.mp4",
    duration: "47:55",
    type: "video",
    size: "1.4 GB",
    date: "22/jun/2022",
  },
  {
    title: "Como-cerrar-una-venta.mp4",
    duration: "10:12",
    type: "video",
    size: "284 MB",
    date: "11/sep/2023",
  },
  {
    title: "Crea-un-ticket-valioso.mp4",
    duration: "03:50:22",
    type: "video",
    size: "4.3 GB",
    date: "21/jun/2023",
  },
  {
    title: "Conquista-el-mercado-digital.mp4",
    duration: "5:00",
    type: "video",
    size: "500 MB",
    date: "5/abr/2023",
  },
];

function Detail() {
  return (
    <>
      <DetailHeader />
      <List
        data={VIDEOS}
        type="video"
        icon={<PlayIcon width={20} className={"fill-main"} />}
      />
    </>
  );
}

export default Detail;
