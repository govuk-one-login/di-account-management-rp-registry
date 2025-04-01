import { Client } from "../interfaces/client.interface";

const dfeApplyForTeacherTraining: Client = {
  clientId: {
    production: "wo1OYi8Z2fCQEX-9B8IPS2-F-ZE",
    integration: "wo1OYi8Z2fCQEX-9B8IPS2-F-ZE",
    nonProduction: "dfeApplyForTeacherTraining",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Apply for teacher training",
      description: "Apply for a teacher training course to teach in England.",
      linkText: "Go to your Apply for teacher training account",
      linkUrl:
        "https://www.apply-for-teacher-training.service.gov.uk/candidate/account",
    },
  },
};

export default dfeApplyForTeacherTraining;
