import { Client } from "../interfaces/client.interface";

const defraDangerousDogsIndex: Client = {
  clientId: {
    production: "u6cETcTbDeT5PZaRRvUskHQeZq8",
    integration: "u6cETcTbDeT5PZaRRvUskHQeZq8",
    nonProduction: "defraDangerousDogsIndex",
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
      header: "Dangerous dogs index",
      description:
        "Search the Dangerous dogs index for dogs or owners to view their details and exemption status.",
      linkText: "Go to your Dangerous dogs index account",
      linkUrl: "https://dogsindex.defra.gov.uk",
    },
  },
  isOffboarded: false,
};

export default defraDangerousDogsIndex;
