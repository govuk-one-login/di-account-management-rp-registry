import { Client } from "../interfaces/client.interface";

const connectFamilies: Client = {
  clientId: {
    production: "cqGoT1LYLsjn-iwGcDTzamckhZU",
    integration: "cqGoT1LYLsjn-iwGcDTzamckhZU",
    nonProduction: "connectFamilies",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Connect families to support",
      description:
        "Find local support services for children, young people, parents and carers.",
      linkText: "Go to your connect families to support account",
      linkUrl:
        "https://connect-families-to-support.education.gov.uk/ProfessionalReferral/Search",
    },
  },
  isOffboarded: true,
};

export default connectFamilies;
