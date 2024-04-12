import { useRef } from "react";
import Icon from "../SVG/Icon";

interface OptionMenuModalProps {
  id: number;
  theme?: string;
  setCardTheme: (theme: string) => void;
  setShowModal: (showModal: boolean) => void;
  setCardType: (type: string) => void;
}

function OptionMenuModal({ id, theme, setCardTheme, setCardType, setShowModal }: OptionMenuModalProps) {
  
  const [selectedIcon, setSelectedIcon] = useState('home');
  const icons = ['home', 'face', 'build', 'alarm', 'work', 'school'];
  
  
  
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(false);
  };
  
  // ------------------------------------------------ Gestion changement couleur --------------------------------
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const changeColor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
      
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTheme(e.target.value);
    setShowModal(false);
  };



  // ------------------------------------------------ Gestion changement Logo --------------------------------
  const changeType = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log("Changer logo", id);
  };


  return (
    <div className="">
      <Icon
        type="close"
        theme="#990000"
        className="text-xl absolute right-0 top-0"
        onClick={closeModal}
      />
      <div className="flex flex-col items-start text-sm gap-2 pt-4">
        <div className="" onClick={changeColor}>
          Changer couleur
          <input
            ref={colorPickerRef}
            type="color"
            style={{ display: 'none' }}
            onChange={handleColorChange}
          />
        </div>
        <div className="" onClick={changeType}>Changer logo</div>
        <div className="">Supprimer la carte</div>
        <div className="">Ajouter contour</div>
      </div>
    </div>
  );
}

export default OptionMenuModal;
