import React from "react";

const Search = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  w-full md:w-[400px]">
      
      <input
        type="text"
        className="h-[61px] md:w-[400px] text-center w-full"
        placeholder="Search Token Name"
      />
      {/* <div className="flex absolute top-[-30px] left-[300px]">
      <img
        src="/witchhath.png"
        alt="#"
        className="w-[80px] h-[80px]"
      />
      </div> */}
    </div>
  );
};

export default Search;
