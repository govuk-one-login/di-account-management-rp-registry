import { Client } from "../interfaces/client.interface";

const dwpFindYourPensions: Client = {
  clientId: {
    production: "CKM7lHoxwJdjPzgUAxp-Rdbi_04",
    integration: "CKM7lHoxwJdjPzgUAxp-Rdbi_04",
    nonProduction: "dwpFindYourPensions",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Find your pensions",
      description:
        "Find and view all your pensions information.",
      linkText: "Go to Find your pensions",
      linkUrl: {
        nonProduction:
          "https://find-your-pensions.service.gov.uk/",
        integration: "https://find-your-pensions.service.gov.uk/",
        production:
          "https://find-your-pensions.service.gov.uk/",
      },
    },
  },
  isOffboarded: false,
};

export default dwpFindYourPensions;
