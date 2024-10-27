import React from "react";
import { FaHeart } from "react-icons/fa6";


const Card = ({name, link}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 p-5 shadow-lg border-[1px] border-[#663300] rounded-2xl w-full md:w-[400px] ">
      <img
        src="/nft.jpg"
        alt=""
        className="rounded-full w-[100px] h-[100px] "
      />
      <p className="text-sm">{name}</p>
      <div className="flex items-center justify-center gap-2">
      <a href={link} className="text-[#2C2C2C]">Give me a </a>
      <FaHeart style={{"color": "black"}} />
      </div>
      
      <a href="#" className="text-[#2C2C2C]">Mitosis Refcode- X Profile</a>
    </div>
  );
};

export default Card;
