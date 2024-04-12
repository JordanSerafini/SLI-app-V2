import React from 'react';
import Icon from "../SVG/Icon";

interface CardProps {
  title: string;
  type: string;
  onClick?: () => void;
  className?: string;
  theme?: string;
}


// Utilisation d'une fonction fléchée pour déclarer le composant
const Cards: React.FC<CardProps> = ({ title, type, theme, onClick, className = '' }) => {
  theme = theme || "black";

  // La classe pour l'icône, inchangée
  const iconClass ="text-3xl font-extralight";

  // Ajout d'une classe pour le positionnement relatif du conteneur
  const containerClass = "relative bg-white-perso sm:w-3/10 w-4.5/10 h-36 flex flex-col items-center justify-center rounded-lg shadow-md";

  // Ajout d'une classe pour le positionnement absolu de l'icône More_Horiz
  const moreHorizIconClass = "absolute top-1 right-2 text-xl";

  return (
    <div 
      className={`${containerClass} ${className}`} 
      onClick={onClick}
    >
      {/* Modification de la classe de l'icône More_Horiz pour utiliser le positionnement absolu */}
      <Icon type="More_Horiz" theme="black" className={moreHorizIconClass} />
      {/* Icône principale et titre inchangés */}
      <Icon type={type} theme={theme} className={iconClass}/>
      {title ? <div>{title}</div> : <div>title</div>}
    </div>
  );
}

export default Cards;
