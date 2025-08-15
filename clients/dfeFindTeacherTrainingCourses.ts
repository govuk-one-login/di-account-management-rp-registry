import { Client } from "../interfaces/client.interface";

const dfeFindTeacherTrainingCourses: Client = {
  clientId: {
    production: "B9KZl6C1T3h4rYswq84GF2okyFk",
    integration: "B9KZl6C1T3h4rYswq84GF2okyFk",
    nonProduction: "dfeFindTeacherTrainingCourses",
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
      header: "Find teacher training courses",
      description: "Find courses by subject, location or training provider.",
      linkText: "Go to your Find teacher training courses account",
      linkUrl: "https://find-teacher-training-courses.service.gov.uk/",
      startUrl: "https://www.gov.uk/find-teacher-training-courses",
      startText: "Find teacher training courses in England",
    },
  },
  isOffboarded: false,
};

export default dfeFindTeacherTrainingCourses;
