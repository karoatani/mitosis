import React from "react";
import { FaHeart } from "react-icons/fa6";


const Card = ({name, link, image, xProfile, refCode}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 p-5 shadow-lg border-[1px] border-black rounded-2xl w-full md:w-[400px] ">
      <img
        src={image}
        alt=""
        className="rounded-full w-[100px] h-[100px] "
      />
      <p className="text-sm">{name}</p>
      <div className="flex items-center justify-center gap-2 font-bold">
      <a href={link} className="text-black underline">Give me a </a>
      <FaHeart style={{"color": "black"}} />
      </div>
      
      <div className="flex text-black font-bold ">
      <a href={refCode} className="text-black underline">Mitosis Refcode-</a>
      <a href={xProfile} className="underline">X Profile</a>
      </div>
    </div>
  );
};

export default Card;
