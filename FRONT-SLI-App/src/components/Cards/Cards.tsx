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
const Cards: React.FC<CardProps> = ({ title, type, theme, onClick, className = '',  }) => {
  theme = theme || "black";

  const iconClass ="text-3xl font-extralight";

    return (
    <div 
      className={`${className} bg-white-perso sm:w-3/10 w-4.5/10 h-36 flex flex-col items-center justify-center rounded-lg shadow-md `} 
      onClick={onClick}
    >
      <Icon type={type} theme={theme}  className={iconClass}/>
      {title ? <div>{title}</div> : <div> title </div>}
    </div>
  );
}

export default Cards;
