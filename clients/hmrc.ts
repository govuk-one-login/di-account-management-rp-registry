import { Client } from "../interfaces/client.interface";

const hmrc: Client = {
  clientId: {
    production: "mQDXGO7gWdK7V28v82nVcEGuacY",
    integration: "mQDXGO7gWdK7V28v82nVcEGuacY",
    nonProduction: "hmrc",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Services run by HM Revenue and Customs (HMRC)",
      linkText: "Search for or sign in to find HMRC services",
      linkUrl: "https://www.gov.uk/log-in-register-hmrc-online-services",
      description:
        "Search for HMRC services or sign in to find HMRC services you have added to your personal or business tax account.",
    },
    cy: {
      header:
        "Gwasanaethau sy'n cael eu rhedeg gan Cyllid a Thollau EF (CThEF)",
      linkText: "Chwilio am neu fewngofnodi i ddod o hyd i wasanaethau CThEF",
      linkUrl: "https://www.gov.uk/log-in-register-hmrc-online-services",
      description:
        "Chwiliwch am wasanaethau CThEF neu mewngofnodwch i ddod o hyd i wasanaethau CThEF rydych wedi'u hychwanegu at eich cyfrif treth bersonol neu fusnes.",
    },
  },
  isOffboarded: false,
};

export default hmrc;
