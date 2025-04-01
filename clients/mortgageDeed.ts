import { Client } from "../interfaces/client.interface";

const mortgageDeed: Client = {
  clientId: {
    production: "VsAkrtMBzAosSveAv4xsuUDyiSs",
    integration: "VsAkrtMBzAosSveAv4xsuUDyiSs",
    nonProduction: "mortgageDeed",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
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
    },
    cy: {
      header: "Llofnodwch eich gweithred morgais",
      linkText: "Llofnodwch eich gweithred morgais",
      linkUrl: "https://sign-your-mortgage-deed.landregistry.gov.uk",
    },
  },
};

export default mortgageDeed;
