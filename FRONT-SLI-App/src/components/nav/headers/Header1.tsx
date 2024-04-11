import Icon from "../../SVG/Icon";

function Header1({ title = "header", css = "" }) {
  return (
    <div className={`flex flex-row w-full justify-between p-2 ${css}`}>
      <div>
        <Icon type="Arrow_Back_iOS" theme="" />
      </div>
      <div>{title}</div>
      <div>
        <Icon type="menu" theme="" />
      </div>
      
    </div>
  );
}

export default Header1;