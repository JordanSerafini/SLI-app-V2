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

  return (
// Dans votre composant NavMenu, ajoutez un style initial pour positionner le menu hors de l'écran
<div ref={menuRef} className="fixed right-0 top-0 w-7/10 bg-white z-50 h-full" style={{ transform: 'translateX(100%)' }}>
      <Icon type="close" theme="" onClick={handleClick} className="fixed right-2 top-2"/>
      <div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default NavMenu;
