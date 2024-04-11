import Icon from "../components/SVG/Icon";
import Header1 from "../components/nav/headers/Header1";
import BottomNavBar1 from "../components/nav/navBar/bottomNavBar1";
import HomeContent from "../components/Home/HomeContent";

function Home() {
  return (
    <div className="w-screen h-screen bg-gray-light2 flex flex-col justify-start items-center gap-">
      {/* --------------------------------------------- Header ---------------------------------------- */}
      <div className="h-0.5/10 w-full ">
        <Header1
          title="Accueil"
          css=" font-merriweather font-black tracking-widest border-b-1 border-black-pers"
        />
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------- Body ---------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------- */}

      <div className="h-8.5/10 w-full flex flex-col gap-8 mt-8">
      {/* ------------------------------------------------------------------------- Perso ---------------------------------------- */}
        <div className="px-2 flex flex-row w-full h-1/10 items-center gap-4 justify-between">
          <div className="">
            <Icon
              type="User_Attributes"
              theme="black"
              className="text-3xl border-2 border-black rounded-full p-2 bg-gray-light"
            />
          </div>
          <div className="font-Poppins flex flex-col gap-">
            <div className="font-semibold">Jordan Serafini - <span className="text-blue-perso">Solution Logique</span></div>
            <div className="font-extralight ">administrateur</div>
          </div>
          < Icon type="settings" theme="black" className="" />
        </div>
      {/* ----------------------------------------------------------------------- Home Card ---------------------------------------- */}

        <>
          <HomeContent />
        </>
      </div>
      {/* --------------------------------------------- Nav ---------------------------------------- */}
      <div className="h-1/10 w-full">
        <BottomNavBar1 />
      </div>
    </div>
  );
}

export default Home;
