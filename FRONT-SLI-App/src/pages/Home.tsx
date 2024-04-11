import Header1 from "../components/nav/headers/Header1";
import BottomNavBar1 from "../components/nav/navBar/bottomNavBar1";
import HomeContent from "../components/Home/HomeContent";
import MenuHome from "../components/nav/menu/MenuHome";

function Home() {
  return (
    <div className="w-screen h-screen bg-gray-light2 flex flex-col justify-start items-center gap-4">
      {/* --------------------------------------------- Header ---------------------------------------- */}
      <div className="w-full ">
        <Header1
          title="Accueil"
          css=" font-merriweather font-black tracking-widest border-b-1 border-black-pers"
        />
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      {/* --------------------------------------------- Body ---------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------------- */}
      < MenuHome />
      <div className="h-8.5/10 w-full flex flex-col gap-8 ">
      {/* ------------------------------------------------------------------------- Perso ---------------------------------------- */}
 
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
