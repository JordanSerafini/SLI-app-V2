import Header1 from "../components/nav/headers/Header1";
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
      <Header1
          title="Accueil"
          css=" font-merriweather font-extrabold tracking-widest border-t-1 pt-2 border-black-pers"
        />
      </div>
    </div>
  );
}

export default Home;
