import Icon from "../../SVG/Icon"

function bottomNavBar1() {
  return (
    <div>
      <div className="w-full h-full flex justify-between items-center bg-gray-light2">
        <div className="w-1/4 h-full flex justify-center items-center">
          <Icon type="home" className="w-8 h-8 text-black-pers" />
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <Icon type="search" className="w-8 h-8 text-black-pers" />
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <Icon type="heart" className="w-8 h-8 text-black-pers" />
        </div>
        <div className="w-1/4 h-full flex justify-center items-center">
          <Icon type="user" className="w-8 h-8 text-black-pers" />
        </div>
      </div>
    </div>
  )
}

export default bottomNavBar1