import Icon from "../../SVG/Icon";

interface NavMenuProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

function NavMenu({ showMenu, setShowMenu }: NavMenuProps) {
    const handleClick = () => {
        setShowMenu(!showMenu);
      };
  return (
    <div className="fixed right-0 top-0 w-8.5/10 bg-white z-50 h-full">
          <Icon type="menu" theme="" onClick={handleClick} className="fixed right-2 top-2"/>

    </div>
  );
}

export default NavMenu;
