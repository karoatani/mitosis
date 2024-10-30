import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import Search from "./components/Search";
import Card from "./components/Card";
import FloatingCharacter from "./components/FloatingCharacter";
import HalloweenEffect from "./components/HalloweenEffect";
import { useEffect, useState} from "react";
import { RiseLoader } from "react-spinners";

// import {Cube} from 'react-preloaders';
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [imageloading, setimageLoading] = useState(false);
  
  const [image, setImage] = useState("/default.gif");
  

    useEffect(() => {
        // Simulate content loading with a timeout
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 2 seconds
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);
  



    function fetchNft(id) {
      const apiUrl = `https://res.cloudinary.com/dzi0dkvda/image/upload/halloween/${id}.jpg`;
      // WARNING : REMOVE THIS KEY BEFORE PUSHING TO GITHUB
        // setImage(apiUrl);
      setimageLoading(true)
      axios.get(apiUrl).then((r)=> {

        const timer = setTimeout(() => {
          setimageLoading(false);
          setImage(apiUrl);
      }, 1000);
      // clearTimeout(timer)
      }).catch((err) => {
        const timer = setTimeout(() => {
          
        setimageLoading(false)
        setImage('/default.gif');
      }, 1000);
      })

    }
  
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(inputValue); // Only updates after user stops typing
        // console.log(inputValue);
      }, 500); // 500ms delay
      return () => clearTimeout(timer); // Cleanup timeout if user types again
    }, [inputValue]);
  
    
    
    useEffect(() => {
      if (debouncedValue){

        fetchNft(parseInt(debouncedValue));
        console.log(debouncedValue);
      }
      // console.log(debouncedValue)
  
      else {
        
        setImage('/default.gif');
      }
    }, [debouncedValue]);

    
  return (
    <>
    {loading ?<div className="flex items-center justify-center w-screen h-screen"><RiseLoader /></div> : <div className="bg-[#573BFF] w-full overflow-x-hidden  relative flex flex-col    gap-10 text-white  bg-no-repeat bg-cover p-4 font-montserrat">
      <div>
        <h1 className="text-3xl md:text-5xl uppercase font-bold font-creepster tracking-wider ">
          Morsedn404
        </h1>
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/spider.png"
          alt=""
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
        />
      </div>

    
      <HalloweenEffect/>
      
      <div className="flex flex-col gap-8 mt-5 items-center justify-center">
        <Canvas image={image} imageloading={imageloading}/>
        <Search setInputValue={setInputValue}/>

        {/* </div> */}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center mb-[200px]">
        <h2 className=" text-2xl text-bold text-center">Contributors</h2>
        <Card
          name="@MurinXDA"
          link="https://waitlist.mitosis.org/profile/G29Q42"
          image="/murin.png"
          xProfile="https://x.com/MurinXDA"
          refCode="https://waitlist.mitosis.org/my-page?code=G29Q42"
        />
        <Card
          name="@atanikun"
          link="https://waitlist.mitosis.org/profile/6QQ31I "
          image="/atanikun.png"
          xProfile="https://x.com/atanikun"
          refCode="https://waitlist.mitosis.org/my-page?code=6QQ31I"
        />
        
      </div>
      <div className="absolute bottom-0  flex  flex-col  gap-5 items-center justify-center w-full">
          <div className="flex flex-col gap-2 items-center justify-center ">
            <img src="/mitosis.png" alt="" className="h-[30px]" />
            <p className="italic text-center text-xs p-4">
              Disclaimer: this tool is not official and was not developed by the
              Mitosis team, <br />
              Made by @MurinXDA x @Atanikun
            </p>
          </div>
          <footer>
            <p className="text-center">&copy;2024</p>
          </footer>
        </div>
      <div className="hidden md:flex absolute bottom-0 right-5 ">
        <FloatingCharacter />
      </div>
    </div>}
    </>
    
  );
  
}
