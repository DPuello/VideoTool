import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListRow({ item, icon, index, type }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="flex items-center gap-6 p-3 border-b-[1px] border-grayLight text-sm hover:bg-grayLight cursor-pointer justify-between"
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center gap-6 min-w-[20rem] ">
        <div className="w-[14px] h-[14px] border-gray border-[2px] rounded p-[2px]">
          {selected && <div className="w-full h-full bg-main rounded-sm" />}
        </div>
        {type == "video" ? (
          <div
            className="flex relative items-center gap-6 before:bg-main before:h-[1px] before:bottom-[-3px] before:absolute before:transition-all before:duration-300 before:w-0 hover:before:w-full hover:text-main transition-all duration-300"
          >
            {icon}
            {item.title}
          </div>
        ) : (
          <Link
            className="flex relative items-center gap-6 before:bg-main before:h-[1px] before:bottom-[-2px] before:absolute before:transition-all before:duration-300 before:w-0 hover:before:w-full hover:text-main transition-all duration-300"
            to={`/detail/${index}`}
          >
            {icon}
            {item.title}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-4 gap-5 w-[30rem]  min-w-[300px]">
        {type == "video" ? (
          <>
            <span className="text-center">{item.size}</span>
            <span className="text-center">{item.duration}</span>
          </>
        ) : (
          <>
            <span className="text-center">{item.amount}</span>
            <span className="text-center">{item.size}</span>
          </>
        )}
        <span className="col-span-2 text-center">{item.date}</span>
      </div>
    </div>
  );
}

function List({ data, icon, type }) {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-6 p-3 border-b-[1px] border-grayLight font-bold text-sm justify-between">
        <div className="flex items-center gap-6  min-w-[20rem]">
          <div
            className="w-[14px] h-[14px] border-gray border-[2px] rounded p-[2px] "
            onClick={() => setSelected(!selected)}
          >
            {selected && <div className="w-full h-full bg-main rounded-sm" />}
          </div>
          Nombre
        </div>

        <div className="grid grid-cols-4 gap-5 w-[30rem] min-w-[300px]">
          {type == "video" ? (
            <>
              <span className="text-center">Tamaño</span>
              <span className="text-center">Duración</span>
            </>
          ) : (
            <>
              <span className="text-center">Videos</span>
              <span className="text-center">Tamaño</span>
            </>
          )}
          <span className="col-span-2 text-center truncate">
            Última modificación
          </span>
        </div>
      </div>

      {data.map((item, index) => (
        <ListRow item={item} icon={icon} index={index} type={type} />
      ))}
    </div>
  );
}

export default List;
