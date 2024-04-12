interface IconProps {
  type: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; // Update the type of onClick prop
  className?: string;
  style?: React.CSSProperties;
  theme?: string;
}

const Icon: React.FC<IconProps> = ({
  type,
  theme,
  onClick,
  className = "",
  style,
}) => {
  if (theme === undefined) theme = "black";

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      onClick={onClick}
      style={{ cursor: "pointer", color: `${theme}`, ...style }}
    >
      {type}
    </span>
  );
};

export default Icon;
