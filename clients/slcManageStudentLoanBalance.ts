import { Client } from "../interfaces/client.interface";

const slcManageStudentLoanBalance: Client = {
  clientId: {
    production: "F0hQSHLX2eNdfXRTM3yGPfDpUZw", // pragma: allowlist secret
    integration: "F0hQSHLX2eNdfXRTM3yGPfDpUZw", // pragma: allowlist secret
    nonProduction: "slcManageStudentLoanBalance",
  },
  isAvailableInWelsh: true,
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
      header: "Manage your student loan balance",
      description: "Check your balance, make regular or one-off repayments, or let SLC know if your details have changed.",
      linkText: "Go to your Manage your student loan balance account",
      linkUrl: "https://www.manage-student-loan-balance.service.gov.uk/ors/account-overview/secured/summary?locale=en&idp=1",
      startUrl: "https://www.gov.uk/sign-in-to-manage-your-student-loan-balance",
      startText: "Manage your student loan balance",
    },
    cy: {
      header: "Rheoli balans eich benthyciad myfyrwyr",
      description: "Gallwch edrych beth yw eich balans, gwneud taliadau unigol neu reolaidd, neu roi gwybod i SLC os yw eich manylion wedi newid.",
      linkText: "Ewch i'ch cyfrif Rheoli balans eich benthyciad myfyrwyr",
      linkUrl: "https://www.manage-student-loan-balance.service.gov.uk/ors/account-overview/secured/summary?locale=cy&idp=1",
      startUrl: "https://www.gov.uk/mewngofnodwch-i-reoli-balans-eich-benthyciad-myfyriwr",
      startText: "Rheoli balans eich benthyciad myfyrwyr",
    },
  },
  isOffboarded: false,
};

export default slcManageStudentLoanBalance;