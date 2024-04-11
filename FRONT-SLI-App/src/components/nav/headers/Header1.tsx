import { useState } from "react";
import Icon from "../../SVG/Icon";
import NavMenu from "../menu/NavMenu";

function Header1({ title = "header", css = "" }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className=" flex flex-col gap-2">
      <div className={`flex flex-row w-full justify-between p-2 ${css}`}>
        <div>
          <Icon type="Arrow_Back_iOS" theme="" />
        </div>
        <div>{title}</div>
        <div>
          <Icon type="menu" theme="" onClick={handleClick} />
        </div>
      </div>
      {showMenu && <NavMenu setShowMenu={setShowMenu} showMenu={showMenu} />}
    </div>
  );
}

export default Header1;
