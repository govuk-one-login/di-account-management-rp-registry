import { Client } from "../interfaces/client.interface";

const earlyYearsTeacherFinancialIncentives: Client = {
  clientId: {
    production: "2dwMg700-_FXDXmUK7qUzQDj_5Q",
    integration: "2dwMg700-_FXDXmUK7qUzQDj_5Q",
    nonProduction: "earlyYearsTeacherFinancialIncentives",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Claim an early years teacher recognition payment",
      description:
        "Start or continue an application to claim an early years teacher recognition payment.",
      linkText: "Go to your early years teacher recognition claim",
      linkUrl: "https://www.claim-additional-teaching-payment.service.gov.uk/early-years-teachers-financial-incentive-payments/sign-in",
    },
  },
  isOffboarded: false,
};

export default earlyYearsTeacherFinancialIncentives;
