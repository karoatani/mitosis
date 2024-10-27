import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import Search from "./components/Search";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#FFC48C] to-[#F2994A] w-full  relative flex flex-col gap-10   bg-no-repeat bg-cover p-4 font-montserrat">
      <div>
        <h1 className="text-lg md:text-2xl uppercase font-bold text-black">
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

      {/* <div className="flex justify-evenly items-center mt-5">
        <div>
          <img src="/pumpkin-halloween.png " alt="" className="hidden" />
        </div> */}

        <div className="flex flex-col gap-8 mt-5 items-center justify-center">
          <Canvas />
          <Search />
        {/* </div> */}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-[#663300] text-2xl text-bold text-center">
          Contributors
        </h2>
        <Card name="@MurinXDA" link="#"/>
        <Card name="@atanikun" link="#" />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <img src="/mitosis.png" alt="" className="h-[30px]" />
        <p className="italic text-center text-xs">
          Disclaimer: this halloween nft generator is not official and was not
          developed by the Mitosis team, <br/>Made by @MurinXDA x @Atanikun
        </p>
      </div>
      
      <footer>
        <p className="text-center">&copy;2024</p>
      </footer>
    </div>
  );
}
