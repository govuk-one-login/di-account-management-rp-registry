import { Client } from "../interfaces/client.interface";

const drivingMedicalCondition: Client = {
  clientId: {
    production: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    integration: "iJNgycwBNEWGQvkuiLxOdVmVzG9",
    nonProduction: "drivingMedicalCondition",
  },
  isAvailableInWelsh: true,
  isAllowed: true,
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
    cy: {
      header: "Gyrru gyda chyflwr iechyd",
      linkText: "Gyrru gyda chyflwr iechyd",
      linkUrl: "https://www.gov.uk/browse/driving/disability-health-condition",
    },
  },
};

export default drivingMedicalCondition;
