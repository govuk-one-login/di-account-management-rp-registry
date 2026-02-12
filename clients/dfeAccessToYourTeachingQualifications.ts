import { Client } from "../interfaces/client.interface";

const dfeAccessToYourTeachingQualifications: Client = {
  clientId: {
    production: "q5hgiE0V2meH7KqN04cdBl6PWm8",
    integration: "q5hgiE0V2meH7KqN04cdBl6PWm8",
    nonProduction: "dfeAccessToYourTeachingQualifications",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date(2026, 1, 16),
    nonProduction: true,
  },
  translations: {
    en: {
      header: "Access your teaching qualifications in England",
      description:
        "Download and update teaching certificates or check a qualification or early career induction status.",
      linkText: "Go to your Access your teaching qualifications account",
      linkUrl:
        "https://access-your-teaching-qualifications.education.gov.uk/qualifications",
      startUrl:
        "https://www.gov.uk/guidance/access-your-teaching-qualifications",
      startText: "Access your teaching qualifications in England",
    },
  },
  isOffboarded: false,
};

export default dfeAccessToYourTeachingQualifications;
