import { Client } from "../interfaces/client.interface";

const dfeNationalProfessionalDevelopmentCourse: Client = {
  clientId: {
    production: "3XJkCpoGvLi5t-RUBBAnvMA_Zhc",
    integration: "3XJkCpoGvLi5t-RUBBAnvMA_Zhc",
    nonProduction: "dfeNationalProfessionalDevelopmentCourse",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Register for a National Professional Development (NPD) course",
      description: "Register for early years teaching courses.",
      linkText:
        "Go to your Register for a National Professional Development (NPD) course account",
      linkUrl:
        "https://teacher-training-entitlement.education.gov.uk/registration/course-start-date",
      startUrl: "https://teacher-training-entitlement.education.gov.uk/",
      startText:
        "Register for a National Professional Development (NPD) course",
    },
  },
  isOffboarded: false,
};

export default dfeNationalProfessionalDevelopmentCourse;
