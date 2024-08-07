import React from "react";
import { text } from "stream/consumers";

const CoolCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="bg-gray-900 flex flex-col max-w-[240px] rounded-lg h-fit">
      <h1 className="flex text-2xl font-bold p-2 justify-center items-center w-full">
        {title}
      </h1>
      <p className="p-2">{text}</p>
    </div>
  );
};

export default CoolCard;
