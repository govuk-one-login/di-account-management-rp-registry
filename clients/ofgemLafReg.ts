import { Client } from "../interfaces/client.interface";

const ofgemLafReg: Client = {
  clientId: {
    production: "eywumu-XiJCz7RHyw4Zv8iTgsuc",
    integration: "eywumu-XiJCz7RHyw4Zv8iTgsuc",
    nonProduction: "ofgemLafReg",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Local authority flexible register",
      description:
        "Upload declaration notification templates to Ofgem and manage your users' accounts.",
      linkText: "Go to your flexible register account",
      linkUrl: "https://laf.ofgem.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default ofgemLafReg;
