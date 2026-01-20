import { Client } from "../interfaces/client.interface";

const adultSocialCare: Client = {
  clientId: {
    production: "OAC1Tcd2ksqd2lPPhFR4Eno91Kw",
    integration: "OAC1Tcd2ksqd2lPPhFR4Eno91Kw",
    nonProduction: "adultSocialCare",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,

  translations: {
    en: {
      header: "Get adult social care data",
      description:
        "Access a wide range of datasets relevant to adult social care in England.",
      linkText: "Go to your Get adult social care data account",
      linkUrl: "https://getadultsocialcaredata.com",
      startUrl: "https://getadultsocialcaredata.com",
    },
  },
  isOffboarded: false,
};

export default adultSocialCare;
