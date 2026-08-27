import { Client } from "../interfaces/client.interface";

const farmingConnectSkillsHub: Client = {
  clientId: {
    production: "V69dApWpYRzVOQPHVl6ZJgfCfe0",
    integration: "V69dApWpYRzVOQPHVl6ZJgfCfe0",
    nonProduction: "farmingConnectSkillsHub",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Farming Connect Skills Hub",
      description:
        "Access online support, skills and training, or update your personal skills account.",
      linkText: "Go to the Farming Connect Skills Hub",
      linkUrl:"https://boss.businesswales.gov.wales/",
      startUrl: "https://skills.farmingconnect.gov.wales/",
      startText: "Farming Connect Skills Hub",
    },
    cy: {
      header: "Cyswllt Ffermio Hwb Sgiliau",
      description:
        "Mynediad at gymorth, sgiliau a hyfforddiant ar-lein, neu ddiweddaru eich cyfrif sgiliau personol.",
      linkText: "Ewch i Cyswllt Ffermio Hwb Sgiliau",
      linkUrl:
        "https://boss.businesswales.gov.wales/",
      startUrl:
        "https://skills.farmingconnect.gov.wales/",
      startText: "Cyswllt Ffermio Hwb Sgiliau",
    },
  },
  isOffboarded: false,
};

export default farmingConnectSkillsHub;
