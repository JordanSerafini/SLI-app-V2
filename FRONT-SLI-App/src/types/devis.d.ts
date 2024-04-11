import { Item } from "./item";

interface Devis {
    xx_soldee: string;
    xx_fin_loc: string;
    deliveryaddress_npai: string;
    useinvoicingaddressasdeliveryaddress: string;
    useinvoicingcontactasdeliverycontact: string;
    shippingamountvatexcluded: string;
    shippingvatid: string;
    amountvatexcludedwithdiscountandshipping: string;
    amountvatexcludedwithdiscountandshippingwithoutecotax: string;
    vatamountwithoutecotax: string;
    vatamount: string;
    amountvatincluded: string;
    previousdepositamount: string;
    depositamount: string;
    depositcurrencyamount: string;
    previousdepositcurrencyamount: string;
    totaldueamount: string;
    isecotaxamountincludedtodueamount: string;
    ecotaxamountvatexcluded: string;
    ecotaxvatamount: string;
    ecotaxamountvatincluded: string;
    detailvatamount0_vatamountoncollectionwithoutdeposit: string;
    detailvatamount0_vatamountondebitwithoutdeposit: string;
    detailvatamount0_taxamount: string;
    detailvatamount0_taxvatamount: string;
    detailvatamount0_reamount: string;
    detailvatamount1_vatamountoncollectionwithoutdeposit: string;
    detailvatamount1_vatamountondebitwithoutdeposit: string;
    detailvatamount1_taxamount: string;
    detailvatamount1_taxvatamount: string;
    detailvatamount1_reamount: string;
    detailvatamount2_vatamountoncollectionwithoutdeposit: string;
    detailvatamount2_vatamountondebitwithoutdeposit: string;
    detailvatamount2_taxamount: string;
    detailvatamount2_taxvatamount: string;
    detailvatamount2_reamount: string;
    xx_cloture: string;
    countermarforcedkonlines: string;
    detailvatamount3_vatamountoncollectionwithoutdeposit: string;
    detailvatamount3_vatamountondebitwithoutdeposit: string;
    detailvatamount3_taxamount: string;
    detailvatamount3_taxvatamount: string;
    detailvatamount3_reamount: string;
    detailvatamount4_vatamountoncollectionwithoutdeposit: string;
    detailvatamount4_vatamountondebitwithoutdeposit: string;
    detailvatamount4_taxamount: string;
    detailvatamount4_taxvatamount: string;
    detailvatamount4_reamount: string;
    detailvatamount5_vatamountoncollectionwithoutdeposit: string;
    detailvatamount5_vatamountondebitwithoutdeposit: string;
    detailvatamount5_taxamount: string;
    detailvatamount5_taxvatamount: string;
    detailvatamount5_reamount: string;
    vatmode: number;
    numberofpackage: number;
    iscustomnumberofpackage: string;
    othertaxamount: string;
    financialdiscounttype: number;
    financialdiscountrate: string;
    financialdiscountamount: string;
    amountwithfinancialdiscount: string;
    reportid: string;
    numberofcopies: number;
    commitmentsbalancedue: string;
    amountvatexcluded: string;
    costprice: string;
    discountrate: string;
    discountamount: string;
    amountvatexcludedwithdiscount: string;
    detailtaxamount0_baseamount: string;
    detailtaxamount0_taxamount: string;
    detailtaxamount1_baseamount: string;
    detailtaxamount1_taxamount: string;
    detailtaxamount2_baseamount: string;
    detailtaxamount2_taxamount: string;
    currencyconversionrate: string;
    currencytotaldueamount: string;
    commitmentscurrencybalancedue: string;
    currencyamountvatincluded: string;
    currencyapplicationtype: number;
    currencyamountvatexcluded: string;
    currencyamountvatexcludedwithdiscountandshipping: string;
    currencyamountwithfinancialdiscount: string;
    currencyshippingamountvatexcluded: string;
    currencyamountvatexcludedwithdiscount: string;
    currencyamountvatexcludedwithdiscountandshippingwithoutecotax: string;
    currencyecotaxamountvatincluded: string;
    currencyfinancialdiscountamount: string;
    currencyvatamountwithoutecotax: string;
    currencyecotaxvatamount: string;
    currencyecotaxamountvatexcluded: string;
    currencyvatamount: string;
    currencydiscountamount: string;
    documenttype: number;
    interestamountvatexcluded: string;
    interestrate: string;
    humanservicetotalamount: string;
    humanserviceamountsettledbyother: string;
    humanserviceamountsettledbycesu: string;
    humanserviceamountsettledbycesup: string;
    humanservicedeductibleamount: string;
    grossinterestbase: string;
    grossinterestrate: string;
    grossinterestamount: string;
    detailtaxamount3_baseamount: string;
    detailtaxamount3_taxamount: string;
    detailtaxamount4_baseamount: string;
    detailtaxamount4_taxamount: string;
    detailtaxamount5_baseamount: string;
    detailtaxamount5_taxamount: string;
    shippingamountinclusiontype: number;
    printed: string;
    subjecttore: string;
    reamount: string;
    totalnetweight: string;
    correctiontype: number;
    irpfamount: string;
    irpfrate: string;
    pricewithtaxbased: string;
    customerid: string;
    customername: string;
    revision: string;
    xx_location: string;
    xx_nouveau_client: string;
    xx_separ1: string;
    xx_separ2: string;
    detailvatamount5_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount5_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount5_currencytaxamount: string;
    detailvatamount5_currencytaxvatamount: string;
    detailvatamount5_currencyreamount: string;
    remainingamounttodeliver: string;
    brandrate: string;
    netbrandrate: string;
    donotcreatemovement: string;
    currencyothertaxamount: string;
    detailtaxamount0_currencybaseamount: string;
    detailtaxamount0_currencytaxamount: string;
    detailtaxamount1_currencybaseamount: string;
    detailtaxamount1_currencytaxamount: string;
    detailtaxamount2_currencybaseamount: string;
    detailtaxamount2_currencytaxamount: string;
    detailtaxamount3_currencybaseamount: string;
    detailtaxamount3_currencytaxamount: string;
    detailtaxamount4_currencybaseamount: string;
    detailtaxamount4_currencytaxamount: string;
    detailtaxamount5_currencybaseamount: string;
    detailtaxamount5_currencytaxamount: string;
    automaticsettlementgeneration: string;
    remainingdepositamount: string;
    remainingdepositcurrencyamount: string;
    detailvatamount3_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount3_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount3_currencytaxamount: string;
    detailvatamount3_currencytaxvatamount: string;
    detailvatamount3_currencyreamount: string;
    detailvatamount4_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount4_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount4_currencytaxamount: string;
    detailvatamount4_currencytaxvatamount: string;
    detailvatamount4_currencyreamount: string;
    detailvatamount0_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount0_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount0_currencytaxamount: string;
    detailvatamount0_currencytaxvatamount: string;
    detailvatamount0_currencyreamount: string;
    detailvatamount1_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount1_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount1_currencytaxamount: string;
    detailvatamount1_currencytaxvatamount: string;
    detailvatamount1_currencyreamount: string;
    detailvatamount2_currencyvatamountoncollectionwithoutdeposit: string;
    detailvatamount2_currencyvatamountondebitwithoutdeposit: string;
    detailvatamount2_currencytaxamount: string;
    detailvatamount2_currencytaxvatamount: string;
    detailvatamount2_currencyreamount: string;
    dispatchedbystorehouse: string;
    id: string;
    documentnumber: string;
    numberprefix: string;
    numbersuffix: string;
    documentdate: string;
    globaldocumentorder: number;
    totalvolume: string;
    totalweight: string;
    territorialityid: string;
    vatid: string;
    invoicingaddress_npai: string;
    shippingnotsubjecttofinancialdiscount: string;
    sendedbymail: string;
    serialid: string;
    isstructuredsepacommunication: string;
    othertaxamountnotsubjecttovat: string;
    currencyothertaxamountnotsubjecttovat: string;
    fixedshippingamount: string;
    remainingamounttodelivervatexcluded: string;
    keepdepositvatamount: string;
    documentlanguage: string;
    invoicingchargesnotsubjecttofinancialdiscount: string;
    invoicingchargesamountvatexcluded: string;
    invoicingchargesvatid: string;
    currencyinvoicingchargesamountvatexcluded: string;
    loadfabricationcomponentsmode: number;
    xx_date_report_attente: string;
    maintenancecontractid: string | null;
    incidentid: string | null;
    sepacommunication: string | null;
    reversechargemention: string | null;
    detailtaxamount5_taxcaption: string | null;
    companybankid: string | null;
    currencyid: string | null;
    detailtaxamount4_taxcaption: string | null;
    detailtaxamount5_taxid: string | null;
    detailtaxamount5_taxcalculationbase: string | null;
    detailtaxamount3_taxcaption: string | null;
    detailtaxamount4_taxid: string | null;
    detailtaxamount4_taxcalculationbase: string | null;
    origindocumentnumber: string | null;
    syseditcounter: number;
    sysmoduleid: string | null;
    sysdatabaseid: string | null;
    sysrecordversion: number;
    sysrecordversionid: string;
    colleagueid: string;
    priority: number;
    intervenerid: string | null;
    origindocumenttype: number;
    dealid: string | null;
    detailtaxamount2_taxcaption: string | null;
    detailtaxamount3_taxid: string | null;
    detailtaxamount3_taxcalculationbase: string | null;
    detailtaxamount1_taxcaption: string | null;
    detailtaxamount2_taxid: string | null;
    detailtaxamount2_taxcalculationbase: string | null;
    detailtaxamount0_taxcaption: string | null;
    detailtaxamount1_taxid: string | null;
    detailtaxamount1_taxcalculationbase: string | null;
    shippingid: string | null;
    thirdbankaccountid: string | null;
    detailtaxamount0_taxid: string | null;
    detailtaxamount0_taxcalculationbase: string | null;
    detailvatamount5_detaildepositreamount: string;
    detailvatamount5_detailreamountwithoutdepositamount: string;
    paymenttypeid: string | null;
    accountingexchangegroupid: string | null;
    detailvatamount4_detaildepositreamount: string;
    detailvatamount4_detailreamountwithoutdepositamount: string;
    detailvatamount5_detailvatid: string | null;
    detailvatamount5_detailvatrate: string | null;
    detailvatamount5_detailamountvatexcluded: string;
    detailvatamount5_detailvatamount: string;
    detailvatamount5_detailamountvatincluded: string;
    detailvatamount5_detaildepositvatamount: string;
    detailvatamount5_detailvatamountwithoutdepositamount: string;
    detailvatamount5_ecotaxamountvatexcluded: string;
    detailvatamount5_ecotaxamountvatincluded: string;
    detailvatamount5_ecotaxvatamount: string;
    detailvatamount5_vatamountondebit: string;
    detailvatamount5_vatamountoncollection: string;
    detailvatamount3_detaildepositreamount: string;
    detailvatamount3_detailreamountwithoutdepositamount: string;
    detailvatamount4_detailvatid: string | null;
    detailvatamount4_detailvatrate: string | null;
    detailvatamount4_detailamountvatexcluded: string;
    detailvatamount4_detailvatamount: string;
    detailvatamount4_detailamountvatincluded: string;
    detailvatamount4_detaildepositvatamount: string;
    detailvatamount4_detailvatamountwithoutdepositamount: string;
    detailvatamount4_ecotaxamountvatexcluded: string;
    detailvatamount4_ecotaxamountvatincluded: string;
    detailvatamount4_ecotaxvatamount: string;
    detailvatamount4_vatamountondebit: string;
    detailvatamount4_vatamountoncollection: string;
    detailvatamount2_detaildepositreamount: string;
    detailvatamount2_detailreamountwithoutdepositamount: string;
    detailvatamount3_detailvatid: string | null;
    detailvatamount3_detailvatrate: string | null;
    detailvatamount3_detailamountvatexcluded: string;
    detailvatamount3_detailvatamount: string;
    detailvatamount3_detailamountvatincluded: string;
    detailvatamount3_detaildepositvatamount: string;
    detailvatamount3_detailvatamountwithoutdepositamount: string;
    detailvatamount3_ecotaxamountvatexcluded: string;
    detailvatamount3_ecotaxamountvatincluded: string;
    detailvatamount3_ecotaxvatamount: string;
    detailvatamount3_vatamountondebit: string;
    detailvatamount3_vatamountoncollection: string;
    detailvatamount1_detaildepositreamount: string;
    detailvatamount1_detailreamountwithoutdepositamount: string;
    detailvatamount2_detailvatid: string | null;
    detailvatamount2_detailvatrate: string | null;
    detailvatamount2_detailamountvatexcluded: string;
    detailvatamount2_detailvatamount: string;
    detailvatamount2_detailamountvatincluded: string;
    detailvatamount2_detaildepositvatamount: string;
    detailvatamount2_detailvatamountwithoutdepositamount: string;
    detailvatamount2_ecotaxamountvatexcluded: string;
    detailvatamount2_ecotaxamountvatincluded: string;
    detailvatamount2_ecotaxvatamount: string;
    detailvatamount2_vatamountondebit: string;
    detailvatamount2_vatamountoncollection: string;
    detailvatamount0_detaildepositreamount: string;
    detailvatamount0_detailreamountwithoutdepositamount: string;
    detailvatamount1_detailvatid: string | null;
    detailvatamount1_detailvatrate: string | null;
    detailvatamount1_detailamountvatexcluded: string;
    detailvatamount1_detailvatamount: string;
    detailvatamount1_detailamountvatincluded: string;
    detailvatamount1_detaildepositvatamount: string;
    detailvatamount1_detailvatamountwithoutdepositamount: string;
    detailvatamount1_ecotaxamountvatexcluded: string;
    detailvatamount1_ecotaxamountvatincluded: string;
    detailvatamount1_ecotaxvatamount: string;
    detailvatamount1_vatamountondebit: string;
    detailvatamount1_vatamountoncollection: string;
    detailvatamount0_detailvatid: string;
    detailvatamount0_detailvatrate: string;
    detailvatamount0_detailamountvatexcluded: string;
    detailvatamount0_detailvatamount: string;
    detailvatamount0_detailamountvatincluded: string;
    detailvatamount0_detaildepositvatamount: string;
    detailvatamount0_detailvatamountwithoutdepositamount: string;
    detailvatamount0_ecotaxamountvatexcluded: string;
    detailvatamount0_ecotaxamountvatincluded: string;
    detailvatamount0_ecotaxvatamount: string;
    detailvatamount0_vatamountondebit: string;
    detailvatamount0_vatamountoncollection: string;
    settlementmodeid: string;
    validationstate: string | null;
    documentstate: string | null;
    validitydate: string | null;
    deliverydate: string | null;
    deliverystate: string | null;
    deliveryaddress_description: string;
    deliveryaddress_civility: string;
    deliveryaddress_thirdname: string;
    deliveryaddress_website: string | null;
    deliveryaddress_longitude: string | null;
    deliveryaddress_latitude: string | null;
    deliverycontact_civility: string;
    deliverycontact_name: string;
    deliverycontact_firstname: string;
    deliverycontact_phone: string;
    deliverycontact_cellphone: string;
    deliverycontact_fax: string;
    deliverycontact_email: string;
    deliverycontact_function: string | null;
    deliverycontact_department: string | null;
    deliveryaddress_state: string | null;
    invoicingaddress_state: string | null;
    invoicingaddress_description: string;
    invoicingaddress_civility: string;
    invoicingaddress_thirdname: string;
    deliveryaddress_address1: string;
    deliveryaddress_address2: string | null;
    deliveryaddress_address3: string | null;
    deliveryaddress_address4: string | null;
    invoicingaddress_website: string | null;
    orderthirdid: string;
    thirdidtodeliver: string | null;
    paymentthirdid: string | null;
    invoicingthirdid: string | null;
    taxids0: string | null;
    taxids1: string | null;
    taxids2: string | null;
    invoicingaddress_longitude: string | null;
    invoicingaddress_latitude: string | null;
    invoicingcontact_civility: string;
    invoicingcontact_name: string;
    invoicingcontact_firstname: string;
    invoicingcontact_phone: string;
    invoicingcontact_cellphone: string;
    invoicingcontact_fax: string;
    invoicingcontact_email: string;
    invoicingcontact_function: string | null;
    invoicingcontact_department: string | null;
    invoicingaddressid: string;
    invoicingcontactid: string;
    deliveryaddressid: string;
    deliverycontactid: string;
    invoicingaddress_address1: string;
    invoicingaddress_address2: string | null;
    invoicingaddress_address3: string | null;
    invoicingaddress_address4: string | null;
    reference: string | null;
    recoveredfrom: string | null;
    modifiedsincerecovery: string;
    associatedinvoiceid: string | null;
    associateddeliveryorderid: string | null;
    associatedorderid: string | null;
    storehouseid: string;
    transfereddocumentid: string;
    syscreateddate: string;
    syscreateduser: string;
    sysmodifieddate: string;
    sysmodifieduser: string;
    notesclear: string | null;
    notes: string | null;
    xx_nature_piece: string;
    xx_type_d_envoi: string | null;
    xx_facturation: string | null;
    detailvatamount0_currencydetailamountvatexcluded: string;
    detailvatamount0_currencydetailvatamount: string;
    detailvatamount0_currencydetailamountvatincluded: string;
    detailvatamount0_currencydetaildepositvatamount: string;
    detailvatamount0_currencydetailvatamountwithoutdepositamount: string;
    detailvatamount0_currencyecotaxamountvatexcluded: string;
    detailvatamount0_currencyecotaxamountvatincluded: string;
    detailvatamount0_currencyecotaxvatamount: string;
    detailvatamount0_currencyvatamountondebit: string;
    detailvatamount0_currencyvatamountoncollection: string;
    customercivility: string;
    customerintracommunityvatnumber: string | null;
    detailvatamount2_currencydetaildepositreamount: string;
    detailvatamount2_currencydetailreamountwithoutdepositamount: string;
    detailvatamount3_currencydetailamountvatexcluded: string;
    deliveryorderpreparationstate: number;
    returnorderpreparationstate: string | null;
    xx_regul_marge: string | null;
    xx_satisf_dte_envoi: string | null;
    xx_satisf_dte_retour: string | null;
    detailvatamount5_currencydetaildepositreamount: string;
    detailvatamount5_currencydetailreamountwithoutdepositamount: string;
    returnstate: number;
    intrastatincoterm: string | null;
    invoicingaddress_zipcode: string;
    deliveryaddress_zipcode: string;
    bankid: string | null;
    identificationtype: string | null;
    correctioncause: string | null;
    correctionreasonid: string | null;
    intrastattransportmode: string;
    intrastattransactionnature: string;
    appliedpricelistlineid: string | null;
    pricelistcategory: string | null;
    deliveryaddresstype: string | null;
    invoicingaddress_countryisocode: string;
    invoicingaddress_city: string;
    deliveryaddress_countryisocode: string;
    deliveryaddress_city: string;
    constructionsiteid: string | null;
    hash_hash_chainedid: string | null;
    hash_hash_hash: string | null;
    extrafeedistributionmode: number;
    extrafeebase: number;
    extrafeetotalamount: string;
    extrafeedistributedamount: string;
    extrafeedistributionrates_gooddistributerate: string | null;
    extrafeedistributionrates_servicedistributerate: string | null;
    extrafeedistributionrates_equipmentdistributerate: string | null;
    lastrefreshpurchasestatedate: string | null;
    documentoptionsid: string | null;
}

interface DevisLine {
    item: Item;
    quantity: number;
    
}
