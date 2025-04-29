import { Client } from "../interfaces/client.interface";

const drivingMedicalCondition: Client = {
  clientId: {
    production: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    integration: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    nonProduction: "drivingMedicalCondition",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Driving with a medical condition",
      linkText: "Driving with a medical condition",
      linkUrl: "https://www.gov.uk/browse/driving/disability-health-condition",
    },
  },
  isOffboarded: false,
};

export default drivingMedicalCondition;
