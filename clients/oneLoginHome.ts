import { Client } from "../interfaces/client.interface";

const oneLoginHome: Client = {
  clientId: {
    production: "KcKmx2g1GH6ersWFvzMi1bhehq4",
    integration: "Y8xi2wDAaRvWYlEkoExOUZbAPaYyBEhB",
    nonProduction: "EMGmY82k-92QSakDl_9keKDFmZY",
  },
  isAvailableInWelsh: true,
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Your GOV.UK One Login",
      description: "This includes ‘Security’ and ‘Your services’",
      linkText: "",
      linkUrl: {
        nonProduction: "https://home.staging.account.gov.uk",
        integration: "https://home.integration.account.gov.uk",
        production: "https://home.account.gov.uk",
      },
    },
    cy: {
      header: "Eich GOV.UK One Login",
      description: "Mae hyn yn cynnwys 'Diogelwch' a 'Eich gwasanaethau'",
      linkText: "",
      linkUrl: {
        nonProduction: "https://home.staging.account.gov.uk",
        integration: "https://home.integration.account.gov.uk",
        production: "https://home.account.gov.uk",
      },
    },
  },
  isOffboarded: false,
};

export default oneLoginHome;
