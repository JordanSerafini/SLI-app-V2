import Icon from "../../SVG/Icon"

function MenuHome() {
  return (
    <div className=" font-Poppins px-2 flex flex-row w-9.5/10 h-full items-center gap-4 justify-between bg-white-perso rounded-full shadow-md shadow-gray-600 " >
    <div className="w-1/10">
      <Icon
        type="User_Attributes"
        theme="black"
        className="border- border-black rounded-full p-2 text-xl res-w-400:text-2xl sm:text-3xl"
      />
    </div>
    <div className="w-7.5/10 text-xs  sm:text-base resW400:text-sm  flex flex-col gap-">
      <div className="font-semibold">Jordan Serafini - <span className="text-blue-perso">Solution Logique</span></div>
      <div className="font-extralight ">administrateur</div>
    </div>
    <div className="w-1/10">
    < Icon type="settings" theme="black" className="border- border-black rounded-full p-2 text-xl res-w-400:text-2xl sm:text-3xl" />
    </div>
  </div>
  )
}

export default MenuHome