import { useNavigate } from 'react-router-dom';
import Cards from "../Cards/Cards";

function HomeContent() {
  const navigate = useNavigate();
  const handleDevis = () => {
    navigate('/devis');
  };

  // Tableau de données pour les cartes
  const cardData = [
    { title: "Articles", type: "article" },
    { title: "Favoris", type: "Star", theme: "#e7bc0d" },
    { title: "Clients", type: "Person" },
    { title: "Faire un devis", type: "Format_List_Bulleted", onClick: handleDevis },
    { title: "Bon de livraisons", type: "Local_Shipping" },
    { title: "Fournisseurs", type: "Account_circle" },
    { title: "Bon de réception", type: "Receipt_Long" },
    { title: "Bon de commande", type: "Shopping_Cart" },
    { title: "Documents de stock", type: "inventory" }
  ];

  return (
    <div className="h-10/10 overflow-auto">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 justify-center font-Poppins text-center font-extralight h-full overflow-auto">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            id={index + 1}  
            title={card.title}
            type={card.type}
            theme={card.theme || ""}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeContent;
