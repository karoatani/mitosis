import NavBar from "./components/NavBar";
import Canvas from "./components/Canvas";
import Search from "./components/Search";
import Card from "./components/Card";
import FloatingCharacter from "./components/FloatingCharacter";

export default function App() {
  return (
    <div className="bg-[#573BFF] w-full  relative flex flex-col h-min gap-10 text-white  bg-no-repeat bg-cover p-4 font-montserrat">
      <div>
        <h1 className="text-2xl md:text-2xl uppercase font-bold ">
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
        <h2 className=" text-2xl text-bold text-center">
          Contributors
        </h2>
        <Card name="@MurinXDA" link="https://waitlist.mitosis.org/profile/G29Q42" image="/murin.png" xProfile="https://x.com/MurinXDA" refCode="https://waitlist.mitosis.org/my-page?code=G29Q42"/>
        <Card name="@atanikun" link="https://waitlist.mitosis.org/profile/6QQ31I " image="/atanikun.png"/>
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
      <div className="hidden md:flex absolute bottom-0 right-5 ">
      <FloatingCharacter/>
      </div>
    </div>
  );
}
