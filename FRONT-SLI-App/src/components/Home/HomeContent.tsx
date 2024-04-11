import Cards from "../Cards/Cards";

function HomeContent() {
  return (
    <div className="h-10/10 overflow-auto">
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 justify-center font-Poppins text-center font-extralight h-full overflow-auto">
        <Cards title="Articles" type="article" className="" />
        <Cards title="Favoris" type="Star" theme="#e7bc0d"/>
        <Cards title="Clients" type="Person" />
        <Cards title="Faire un devis" type="Format_List_Bulleted" />
        <Cards title="Bon de livraisons" type="Local_Shipping" />
        <Cards title="Bon de réception" type="Receipt_Long" />
        <Cards title="Bon de commande" type="Shopping_Cart" />
        <Cards title="Documents de stock" type="inventory" />
        <Cards title="Fournisseurs" type="Account_circle" />

      </div>
    </div>
  );
}

export default HomeContent;
