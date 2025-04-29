import { Client } from "../interfaces/client.interface";

const dfeTeacherVacancies: Client = {
  clientId: {
    production: "CVZjwDf4DJROtdPH2vStPXUALrM",
    integration: "CVZjwDf4DJROtdPH2vStPXUALrM",
    nonProduction: "dfeTeacherVacancies",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Teaching vacancies in England",
      description:
        "Search and apply for teaching, leadership and education support vacancies.",
      linkText: "Go to your Teaching vacancies account",
      linkUrl: "https://teaching-vacancies.service.gov.uk/jobseekers/account",
    },
  },
};

export default dfeTeacherVacancies;
