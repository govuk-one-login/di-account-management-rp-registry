import { Client } from "../interfaces/client.interface";

const mojPlanYourFuture: Client = {
  clientId: {
    production: "DVUDWXsy0io7wDBH5LA5IEkEH5U",
    integration: "DVUDWXsy0io7wDBH5LA5IEkEH5U",
    nonProduction: "mojPlanYourFuture",
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
      header: "Plan your future",
      description:
        "Access your appointments and information about your probation requirements.",
      linkText: "Go to your plan your future account",
      linkUrl: "https://plan-your-future.service.justice.gov.uk/otp",
    },
  },
};

export default mojPlanYourFuture;
