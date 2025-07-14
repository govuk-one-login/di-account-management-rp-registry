import { Client } from "../interfaces/client.interface";

const dbs: Client = {
  clientId: {
    production: "RqFZ83csmS4Mi4Y7s7ohD9-ekwU",
    integration: "Dw7Cxas8W7O2usHMHok95elKDRU",
    nonProduction: "dbs",
  },
  isAvailableInWelsh: true,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Request a basic DBS check",
      linkText: "Request a basic DBS check",
      linkUrl: "https://www.gov.uk/request-copy-criminal-record",
      startUrl: "https://www.gov.uk/request-copy-criminal-record",
      startText: "Request a basic DBS check",
      additionalSearchTerms: "disclosure barring service",
    },
    cy: {
      header: "Gwneud cais am wiriad DBS sylfaenol",
      linkText: "Gwneud cais am wiriad DBS sylfaenol",
      linkUrl: "https://www.gov.uk/gwneud-cais-copi-cofnod-troseddol",
      startUrl: "https://www.gov.uk/gwneud-cais-copi-cofnod-troseddol",
      startText: "Gwneud cais am wiriad DBS sylfaenol",
      additionalSearchTerms: "disclosure barring service",
    },
  },
  isOffboarded: false,
};

export default dbs;
