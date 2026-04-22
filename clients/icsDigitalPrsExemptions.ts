import { Client } from "../interfaces/client.interface";

const icsDigitalPrsExemptions: Client = {
  clientId: {
    production: "-REiRoFh0lDHTgZd7j-ecAjPrMw",
    integration: "-REiRoFh0lDHTgZd7j-ecAjPrMw",
    nonProduction: "icsDigitalPrsExemptions",
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
      header:
        "Register an exemption for private rented sector energy standards ",
      description:
        "Register a property for an exemption to the private rented sector minimum efficiency standards.",
      linkText: "Go to your Private Rental Sector Exemptions Register account",
      linkUrl:
        "https://www.register-energy-efficiency-exemption.service.gov.uk/dashboard",
      startUrl:
        "https://www.register-energy-efficiency-exemption.service.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default icsDigitalPrsExemptions;
