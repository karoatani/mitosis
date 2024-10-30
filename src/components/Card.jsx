import React from "react";
import { FaHeart } from "react-icons/fa6";

const Card = ({ name, link, image, xProfile, refCode }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 p-5 shadow-lg  border-[1px] border-[#A680FF] rounded-2xl w-full md:w-[400px]  ">
      <img src={image} alt="" className="rounded-full w-[100px] h-[100px] " />
      <p className="text-sm text-[#F8F8FF] font-bold">{name}</p>
      <div className="flex items-center justify-center gap-2 ">
        <a href={link} className="text-[#D1CFFF] ">
          Give me a{" "}
        </a>
        <FaHeart style={{ color: "#FF9AA2" }} />
      </div>

      <div className="flex   underline">
        <a href={refCode} className="text-[#D1CFFF] ">
          Mitosis Refcode -
        </a>{" "}
        <span>
          <a href={xProfile} className=" text-[#D1CFFF]">
            X Profile
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
