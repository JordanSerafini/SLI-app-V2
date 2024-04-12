import { useRef } from "react";
import Icon from "../SVG/Icon";

interface OptionMenuModalProps {
  id: number;
  theme?: string;
  setCardTheme: (theme: string) => void;
  setShowModal: (showModal: boolean) => void;
}

function OptionMenuModal({ id, theme, setCardTheme, setShowModal }: OptionMenuModalProps) {
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const changeColor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    // Déclencher le color picker
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
      
    }
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTheme(e.target.value);
  };


  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(false);
  };



  return (
    <div className="modal-container">
      <Icon
        type="close"
        theme="red"
        className="text-xl absolute right-0 top-0"
        onClick={closeModal}
      />
      <div className="options-container">
        <div className="option-item" onClick={changeColor}>
          Changer couleur
          <input
            ref={colorPickerRef}
            type="color"
            style={{ display: 'none' }}
            onChange={handleColorChange}
          />
        </div>
        <div className="option-item">Changer logo</div>
        <div className="option-item">Supprimer la carte</div>
        <div className="option-item">Ajouter contour</div>
      </div>
    </div>
  );
}

export default OptionMenuModal;
