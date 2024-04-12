import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Icon from "../../SVG/Icon";
import { useNavigate } from 'react-router-dom';

interface NavMenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ showMenu, setShowMenu }) => {

  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (showMenu) {
      gsap.to(menuRef.current, { autoAlpha: 1, x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { autoAlpha: 0, x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [showMenu]);
  
  
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('token');
    window.location.reload();
  };

  const handleNavigate = (path: string) => {
    navigate(`/${path}`);
  }

  return (
// Dans votre composant NavMenu, ajoutez un style initial pour positionner le menu hors de l'écran
<div ref={menuRef} className=" p-2 border-l-1 border-black text-black-pers fixed right-0 top-0 w-7/10 bg-white z-50 h-full flex flex-col" style={{ transform: 'translateX(100%)' }}>
      <Icon type="close" theme="black" onClick={handleClick} className="fixed right-2 bottom-3"/>
      <div className='flex gap-4 flex-col h-full w-full items-center'>
        <div className='h-2/10 '>
        <div className='text-center text-sm border-b-1 border-black-pers p-2 pb-4'>
          Jordan Serafini
        </div>
        </div>
        <div className='h-5/10 text-xs flex flex-col gap-4 justify-evenly items-start w-5/10 '>
          <div className='flex gap-2 items-center'><span><Icon type="home" onClick={()=>handleNavigate('home')}/></span>Accueil</div>
          <div className='flex gap-2 items-center'><span><Icon type="article" onClick={()=>handleNavigate('articles')}/></span>Articles</div>
          <div className='flex gap-2 items-center'><span><Icon type="Person" onClick={()=>handleNavigate('clients')}/></span>Clients</div>
          <div className='flex gap-2 items-center'><span><Icon type="inventory" onClick={()=>handleNavigate('stock')}/></span>Stock</div>
          <div className='flex gap-2 items-center'><span><Icon type="Format_List_Bulleted" onClick={()=>handleNavigate('devis')}/></span>Devis</div>
          <div className='flex gap-2 items-center'><span><Icon type="pin_drop" onClick={()=>handleNavigate('map')}/></span>Map</div>
          <div className='flex gap-2 items-center'><span><Icon type="settings" onClick={()=>handleNavigate('setting')}/></span>Paramètres</div>
        </div>
      </div>
      < Icon type="logout" theme="red" className="absolute bottom-2 left-2" onClick={handleLogout}/>
    </div>
  );
};

export default NavMenu;
