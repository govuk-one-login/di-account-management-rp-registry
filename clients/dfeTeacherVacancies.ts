import { Client } from "../interfaces/client.interface";

const dfeTeacherVacancies: Client = {
  clientId: {
    production: "CVZjwDf4DJROtdPH2vStPXUALrM",
    integration: "CVZjwDf4DJROtdPH2vStPXUALrM",
    nonProduction: "dfeTeacherVacancies",
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
      header: "Teaching vacancies in England",
      description:
        "Search and apply for teaching, leadership and education support vacancies.",
      linkText: "Go to your Teaching vacancies account",
      linkUrl: "https://teaching-vacancies.service.gov.uk/jobseekers/account",
      startUrl: "https://www.gov.uk/find-teaching-job",
      startText: "Find a job in teaching or education in England",
    },
  },
  isOffboarded: false,
};

export default dfeTeacherVacancies;
