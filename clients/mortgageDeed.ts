import { Client } from "../interfaces/client.interface";

const mortgageDeed: Client = {
  clientId: {
    production: "VsAkrtMBzAosSveAv4xsuUDyiSs",
    integration: "VsAkrtMBzAosSveAv4xsuUDyiSs",
    nonProduction: "mortgageDeed",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Sign your mortgage deed",
      linkText: "Sign your mortgage deed",
      linkUrl: "https://sign-your-mortgage-deed.landregistry.gov.uk",
      startUrl: "https://sign-your-mortgage-deed.landregistry.gov.uk/",
      startText: "Sign your mortgage deed",
    },
  },
  isOffboarded: false,
};

export default mortgageDeed;
