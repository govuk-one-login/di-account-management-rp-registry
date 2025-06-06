import { Client } from "../interfaces/client.interface";

const dbs: Client = {
  clientId: {
    production: "RqFZ83csmS4Mi4Y7s7ohD9-ekwU",
    integration: "Dw7Cxas8W7O2usHMHok95elKDRU",
    nonProduction: "dbs",
  },
  isAvailableInWelsh: true,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Request a basic DBS check",
      linkText: "Request a basic DBS check",
      linkUrl: "https://www.gov.uk/request-copy-criminal-record",
    },
    cy: {
      header: "Gwneud cais am wiriad DBS sylfaenol",
      linkText: "Gwneud cais am wiriad DBS sylfaenol",
      linkUrl: "https://www.gov.uk/gwneud-cais-copi-cofnod-troseddol",
    },
  },
  isOffboarded: false,
};

export default dbs;
