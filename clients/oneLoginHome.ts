import { Client } from "../interfaces/client.interface";

const oneLoginHome: Client = {
  clientId: {
    production: "KcKmx2g1GH6ersWFvzMi1bhehq4",
    integration: "Y8xi2wDAaRvWYlEkoExOUZbAPaYyBEhB",
    nonProduction: "EMGmY82k-92QSakDl_9keKDFmZY",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
  clientType: "home",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
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
};

export default oneLoginHome;
