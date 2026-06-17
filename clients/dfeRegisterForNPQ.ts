import { Client } from "../interfaces/client.interface";

const dfeRegisterForNPQ: Client = {
  clientId: {
    production: "DD1qQMnQ8UThae3vXwZVo59DbYM",
    integration: "DD1qQMnQ8UThae3vXwZVo59DbYM",
    nonProduction: "dfeRegisterForNPQ",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Register for a national professional qualification (NPQ)",
      description: "Check your NPQ registration details and the outcome for courses you’ve completed.",
      linkText: "Go to your NPQ account",
      linkUrl: "https://register-national-professional-qualifications.education.gov.uk/sign-in",
      startUrl: "https://register-national-professional-qualifications.education.gov.uk",
      startText: "Register for a national professional qualification (NPQ)",
    },
  },
  isOffboarded: false,
};

export default dfeRegisterForNPQ;
