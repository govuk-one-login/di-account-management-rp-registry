import { Client } from "../interfaces/client.interface";

const vehicleOperatorLicense: Client = {
  clientId: {
    production: "XwwVDyl5oJKtK0DVsuw3sICWkPU",
    integration: "oLciSn5b6-cqcJjzgMMwCw1moD8",
    nonProduction: "vehicleOperatorLicense",
  },
  isAvailableInWelsh: false,
  clientType: "service",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Apply for a vehicle operator licence",
      linkText: "Apply for a vehicle operator licence",
      linkUrl: "https://www.gov.uk/apply-vehicle-operator-licence",
      startUrl: "https://www.gov.uk/apply-vehicle-operator-licence",
      startText: "apply for a vehicle operator licence",
    },
  },
  isOffboarded: false,
};

export default vehicleOperatorLicense;
