import React from "react";

const Search = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  p-5 w-full md:w-[400px] ">
      
      <input
        type="text"
        className="h-[61px] md:w-[400px] text-center w-full"
        placeholder="Search Token Name"
      />
      {/* <div className=""> */}
      <img
        src="/witchhat.png"
        alt="#"
        className="w-[80px] h-[80px] absolute bottom-10 right-0 md:right-[-20px]"
      />
      {/* </div> */}
    </div>
  );
};

export default Search;
