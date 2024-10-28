import React from "react";
import { FaHeart } from "react-icons/fa6";


const Card = ({name, link, image, xProfile}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 p-5 shadow-lg border-[1px] border-black rounded-2xl w-full md:w-[400px] ">
      <img
        src={image}
        alt=""
        className="rounded-full w-[100px] h-[100px] "
      />
      <p className="text-sm">{name}</p>
      <div className="flex items-center justify-center gap-2 font-bold">
      <a href={link} className="text-black">Give me a </a>
      <FaHeart style={{"color": "black"}} />
      </div>
      
      <div className="flex text-black font-bold">
      <a href="#" className="text-black">Mitosis Refcode-</a>
      <a href={xProfile}>X Profile</a>
      </div>
    </div>
  );
};

export default Card;
