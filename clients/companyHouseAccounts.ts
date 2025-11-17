import { Client } from "../interfaces/client.interface";

const companyHouseAccounts: Client = {
  clientId: {
    production: "Hp9xO0Wda9EcI_2IO8OGeYJyrT0",
    integration: "VdmfAXiINT9wpUsGO_vVnPEbsAE",
    nonProduction: "companyHouseAccounts",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Companies House services",
      description: "View and update company information.",
      linkText: "Go to Companies House",
      linkUrl: "https://www.gov.uk/government/organisations/companies-house",
      startUrl: "https://www.gov.uk/government/organisations/companies-house",
      startText: "Companies House services",
    },
    cy: {
      header: "Gwasanaethau Tŷ'r Cwmnïau",
      description: "Gweld a diweddaru gwybodaeth y cwmni.",
      linkText: "Ewch i Dŷ'r Cwmnïau",
      linkUrl: "https://www.gov.uk/government/organisations/companies-house.cy",
      startUrl:
        "https://www.gov.uk/government/organisations/companies-house.cy",
      startText: "Gwasanaethau Tŷ'r Cwmnïau",
    },
  },
  isOffboarded: false,
};

export default companyHouseAccounts;
