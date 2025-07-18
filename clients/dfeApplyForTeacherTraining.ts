import { Client } from "../interfaces/client.interface";

const dfeApplyForTeacherTraining: Client = {
  clientId: {
    production: "wo1OYi8Z2fCQEX-9B8IPS2-F-ZE",
    integration: "wo1OYi8Z2fCQEX-9B8IPS2-F-ZE",
    nonProduction: "dfeApplyForTeacherTraining",
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
      header: "Apply for teacher training",
      description: "Apply for a teacher training course to teach in England.",
      linkText: "Go to your Apply for teacher training account",
      linkUrl:
        "https://www.apply-for-teacher-training.service.gov.uk/candidate/account",
      startUrl: "https://www.gov.uk/apply-for-teacher-training",
      startText: "Apply for teacher training in England",
    },
  },
  isOffboarded: false,
};

export default dfeApplyForTeacherTraining;
