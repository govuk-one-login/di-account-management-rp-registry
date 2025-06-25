import { Client } from "../interfaces/client.interface";

const homeOfficeSEAS: Client = {
  clientId: {
    production: "PVTFrS4kgHYHFDqEb5IFanlIfcM",
    integration: "PVTFrS4kgHYHFDqEb5IFanlIfcM",
    nonProduction: "homeOfficeSEAS",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Request a standard or enhanced DBS check",
      description: "Apply for standard and enhanced DBS checks.",
      linkText: "Go to your standard and enhanced DBS checks account",
      linkUrl: "https://www.request-standard-enchanced-dbs-check.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default homeOfficeSEAS;
