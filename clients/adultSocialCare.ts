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
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Get adult social care data",
      linkText: "Get adult social care data",
      linkUrl: "https://getadultsocialcaredata.com",
    },
  },
  isOffboarded: false,
};

export default adultSocialCare;
