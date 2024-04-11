import { useState } from "react";
import { useNavigate } from 'react-router-dom';


import Icon from "../../SVG/Icon";
import NavMenu from "../menu/NavMenu";

function BottomNav({ title = "header", css = "" }) {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1);
  }

  const handleClick = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className=" flex flex-col gap-2 font-merriweather font-extrabold tracking-widest border-t-1 border-black-pers">
      <div className={`flex flex-row w-full justify-between p-2 ${css}`}>
        <div>
          <Icon type="Arrow_Back_iOS" theme="" onClick={handleBack}/>
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

export default BottomNav;
