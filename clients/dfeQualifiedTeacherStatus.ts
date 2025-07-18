import { Client } from "../interfaces/client.interface";

const dfeQualifiedTeacherStatus: Client = {
  clientId: {
    production: "GQzNgSkj3QpmHlPO1kIfbMW1PAw",
    integration: "GQzNgSkj3QpmHlPO1kIfbMW1PAw",
    nonProduction: "dfeQualifiedTeacherStatus",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for qualified teacher status (QTS)",
      description:
        "Eligible teachers who trained outside of England can apply for QTS.",
      linkText: "Go to the apply for qualified teacher status (QTS) service",
      linkUrl:
        "https://apply-for-qts-in-england.education.gov.uk/teacher/application",
      startUrl:
        "https://apply-for-qts-in-england.education.gov.uk/eligibility/start",
      startText: "Apply for qualified teacher status in England",
    },
  },
  isOffboarded: false,
};

export default dfeQualifiedTeacherStatus;
