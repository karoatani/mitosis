import React from "react";

const Search = ({setInputValue}) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-black p-5 w-[360px] md:w-[500px] rounded-2xl ">
      
      <input
        type="text"
        className="h-[61px]  md:w-[400px] rounded-2xl text-center w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        placeholder="Enter Nft Id"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* <div className=""> */}
      <img
        src="/witchhat.png"
        alt="#"
        className="w-[80px] h-[80px] absolute bottom-10 right-[-20px] md:right-[-1px]"
      />
      {/* </div> */}
    </div>
  );
};

export default Search;
