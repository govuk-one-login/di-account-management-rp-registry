import { Client } from "../interfaces/client.interface";

const ofgemFinancialResilience: Client = {
  clientId: {
    production: "fPfaL9pGNBYpxdv3vlON2BjfcII",
    integration: "fPfaL9pGNBYpxdv3vlON2BjfcII",
    nonProduction: "ofgemFinancialResilience",
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
      header: "Ofgem Financial Resilience",
      description:
        "Submit regulatory information and supporting documentation to Ofgem.",
      linkText: "Go to your Ofgem Financial Resilience account",
      linkUrl: "https://regulation-portal.ofgem.gov.uk",
    },
  },
  isOffboarded: false,
};

export default ofgemFinancialResilience;
