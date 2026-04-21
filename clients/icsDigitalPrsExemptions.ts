import { Client } from "../interfaces/client.interface";

// ICS digital: Private Rented Sector (PRS) exemptions Register
// Temporarily offboarded - placeholder data used as not all information available
// Production client ID causing errors in live environment, added to prevent issues
const icsDigitalPrsExemptions: Client = {
  clientId: {
    production: "REiRoFh0lDHTgZd7j-ecAjPrMw",
    integration: "REiRoFh0lDHTgZd7j-ecAjPrMw",
    nonProduction: "icsDigitalPrsExemptions",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  translations: {
    en: {
      header: "ICS digital: Private Rented Sector (PRS) exemptions Register",
      description: "Register exemptions for private rented sector properties.",
      linkText: "Go to PRS exemptions register",
      linkUrl: "#", // Placeholder - actual URL to be provided
    },
  },
  isOffboarded: true,
};

export default icsDigitalPrsExemptions;