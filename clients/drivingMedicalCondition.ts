import { Client } from "../interfaces/client.interface";

const drivingMedicalCondition: Client = {
  clientId: {
    production: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    integration: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    nonProduction: "drivingMedicalCondition",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Driving with a medical condition",
      linkText: "Driving with a medical condition",
      linkUrl: "https://www.gov.uk/browse/driving/disability-health-condition",
      startUrl:
        "https://www.gov.uk/health-conditions-and-driving/find-condition-online",
      startText: "Check if a health condition affects your driving",
    },
  },
  isOffboarded: false,
};

export default drivingMedicalCondition;
