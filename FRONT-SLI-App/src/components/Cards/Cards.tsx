import { useEffect, useState } from "react";
import Icon from "../SVG/Icon";
import OptionMenuModal from "../modals/optionMenuModal";

interface CardProps {
  id: number;
  title: string;
  type: string;
  onClick?: () => void;
  className?: string;
  theme?: string;
}

// Utilisation d'une fonction fléchée pour déclarer le composant
const Cards: React.FC<CardProps> = ({
  id,
  title,
  type,
  theme,
  onClick,
  className = "",
}) => {
  const [showModal, setShowModal] = useState(false);

  const [cardTheme, setCardTheme] = useState(theme);
  
  const [cardType, setCardType] = useState(type);

  const idString = id.toString();

  const optionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(!showModal);
  };
  
  // La classe pour l'icône, inchangée
  const iconClass = "text-3xl font-extralight";

  // Ajout d'une classe pour le positionnement relatif du conteneur
  const containerClass =
    "relative bg-white-perso sm:w-3/10 w-4.5/10 h-36 flex flex-col items-center justify-center rounded-lg shadow-md";

  // Ajout d'une classe pour le positionnement absolu de l'icône More_Horiz
  const moreHorizIconClass = "absolute top-1 right-2 text-xl";

  return (
    <div
      id={idString}
      className={`${containerClass} ${className}`}
      onClick={onClick}
    >
      {showModal ? (
        <>
          <OptionMenuModal id={id} theme={cardTheme} setCardTheme={setCardTheme} setShowModal={setShowModal} setCardType={setCardType}/>
        </>
      ) : (
        <>
          <Icon
            type="More_Horiz"
            theme="black"
            className={moreHorizIconClass}
            onClick={optionClick}
          />
          <Icon type={cardType} theme={cardTheme} className={iconClass} />
          {title ? <div style={{color: cardTheme}}>{title}</div> : <div>title</div>}
        </>
      )}
    </div>
  );
};

export default Cards;
