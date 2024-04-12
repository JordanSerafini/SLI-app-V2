import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Icon from "../../SVG/Icon";

interface NavMenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ showMenu, setShowMenu }) => {
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

  return (
// Dans votre composant NavMenu, ajoutez un style initial pour positionner le menu hors de l'écran
<div ref={menuRef} className="p-2 border-l-1 border-black text-black-pers fixed right-0 top-0 w-7/10 bg-white z-50 h-full flex flex-col" style={{ transform: 'translateX(100%)' }}>
      <Icon type="close" theme="black" onClick={handleClick} className="fixed right-2 bottom-3"/>
      <div className='flex gap-4 flex-col h-full '>
        <div className='h-2/10 '>
        <div className='text-center text-sm border-b-1 border-black-pers p-2 pb-4'>
          Jordan Serafini
        </div>
        </div>
        <div className='h-5/10 text-xs flex flex-col gap-2 justify-evenly items-center'>
          <div>Accueil</div>
          <div>Articles</div>
          <div>Clients</div>
          <div>Stock</div>
          <div>Devis</div>
          <div>Map</div>
          <div>Paramètres</div>
        </div>
      </div>
      < Icon type="logout" theme="red" className="absolute bottom-2 left-2" onClick={handleLogout}/>
    </div>
  );
};

export default NavMenu;
