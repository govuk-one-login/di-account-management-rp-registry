import { Client } from "../interfaces/client.interface";

const connectFamilies: Client = {
  clientId: {
    production: "cqGoT1LYLsjn-iwGcDTzamckhZU",
    integration: "cqGoT1LYLsjn-iwGcDTzamckhZU",
    nonProduction: "connectFamilies",
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
