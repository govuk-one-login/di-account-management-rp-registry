import { Client } from "../interfaces/client.interface";

const slcManageStudentFinance: Client = {
  clientId: {
    production: "s_YZn49B7nFnSinIlYFGD3yIS0U",
    integration: "s_YZn49B7nFnSinIlYFGD3yIS0U",
    nonProduction: "slcManageStudentFinance",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date(2026, 10, 29),
    nonProduction: true,
  },
  translations: {
    en: {
      header: "Apply for or manage your student finance",
      description: "Apply for or manage your student finance, including loans, bursaries, grants and other funding.",
      linkText: "Go to your student finance account",
      linkUrl: "https://student-finance-england.service.gov.uk/",
      startUrl: "https://www.gov.uk/apply-online-for-student-finance",
      startText: "Apply online for student finance",
    }
  },
  isOffboarded: false,
};

export default slcManageStudentFinance;