import { Client } from "../interfaces/client.interface";

const dwpJobsAndCareers: Client = {
  clientId: {
    production: "yRWIdxT-iKnZlvig4JHLzYIn0KM",
    integration: "yRWIdxT-iKnZlvig4JHLzYIn0KM",
    nonProduction: "dwpJobsAndCareers",
  },
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: false,
    integration: false,
    nonProduction: false,
  },
  isAvailableInWelsh: false,
  translations: {
    en: {
      header: "Jobs and Careers Service",
      description: "Search for a job that suits your skills.",
      linkText: "Go to your Jobs and Careers account",
      linkUrl: "https://jobs-careers.dwp.gov.uk/auth/success",
      startUrl: "https://jobs-careers.dwp.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default dwpJobsAndCareers;
