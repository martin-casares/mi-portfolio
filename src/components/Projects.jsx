import React from "react";
import { LuCode2 } from "react-icons/lu";

export const Projects = ({ data }) => {
  return (
    <div className="w-full mx-auto lg:w-[740px] py-10">
      <h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
        <LuCode2 className="size-7 " />
        Projectos
      </h2>

      {data.map(({ imageUrl, title, body, tags }, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-semibold text-yellow-200 mb-2">
            {title}
          </h3>
          <p className="text-lg mb-4 text-pretty">{body}</p>
          <ul>
            {tags.map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
          <img
            className="rounded shadow-2xl shadow-white/10 md:w-[700px]"
            src={imageUrl}
            alt={`Captura de pantalla del proyecto ${title}`}
          />
        </div>
      ))}
    </div>
  );
};
