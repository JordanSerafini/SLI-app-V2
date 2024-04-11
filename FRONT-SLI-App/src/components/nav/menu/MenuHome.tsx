import Icon from "../../SVG/Icon"

function MenuHome() {
  return (
    <div className="px-2 flex flex-row w-9.5/10 h-full items-center gap-4 justify-between bg-white-perso rounded-full">
    <div className="">
      <Icon
        type="User_Attributes"
        theme="black"
        className="text-3xl border- border-black rounded-full p-2 "
      />
    </div>
    <div className="font-Poppins text-sm flex flex-col gap-">
      <div className="font-semibold">Jordan Serafini - <span className="text-blue-perso">Solution Logique</span></div>
      <div className="font-extralight ">administrateur</div>
    </div>
    < Icon type="settings" theme="black" className="" />
  </div>
  )
}

export default MenuHome