import { Client } from "../interfaces/client.interface";

const checkFamilyEligibility: Client = {
  clientId: {
    production: "CKHfr_Kz84LYFnsP7m6YJBXqBzw",
    integration: "CKHfr_Kz84LYFnsP7m6YJBXqBzw",
    nonProduction: "checkFamilyEligibility",
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
      header: "Check a family’s eligibility for free school meals",
      linkText: "Check a family’s eligibility for free school meals",
      linkUrl: "https://check-free-school-meals.education.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default checkFamilyEligibility;
