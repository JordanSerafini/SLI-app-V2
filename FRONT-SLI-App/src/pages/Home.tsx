import BottomNav from "../components/nav/navBar/BottomNav";
import HomeContent from "../components/Home/HomeContent";
import MenuHome from "../components/nav/menu/MenuHome";

function Home() {
  return (
    <div className="w-screen h-screen bg-gray-light2 flex flex-col justify-start items-center gap-6 overflow-hidden">

      {/* --------------------------------------------- Info Perso ---------------------------------------- */}
      <div className="h-1/10 w-full flex justify-center mt-2">
        <MenuHome />
      </div>
            {/* --------------------------------------------- Body ---------------------------------------- */}

      <div className="h-8/10 w-full flex flex-col gap- ">
          <HomeContent />
      </div>
      {/* --------------------------------------------- Nav ---------------------------------------- */}
      <div className="h-1/10 w-full">
      <BottomNav
          title="Accueil"
        />
      </div>
    </div>
  );
}

export default Home;
