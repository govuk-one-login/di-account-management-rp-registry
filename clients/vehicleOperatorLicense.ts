import { Client } from "../interfaces/client.interface";

const vehicleOperatorLicense: Client = {
  clientId: {
    production: "XwwVDyl5oJKtK0DVsuw3sICWkPU",
    integration: "oLciSn5b6-cqcJjzgMMwCw1moD8",
    nonProduction: "vehicleOperatorLicense",
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
      header: "Apply for a vehicle operator licence",
      linkText: "Apply for a vehicle operator licence",
      linkUrl: "https://www.gov.uk/apply-vehicle-operator-licence",
      startUrl: "https://www.gov.uk/apply-vehicle-operator-licence",
      startText: "Apply for a vehicle operator licence",
    },
  },
  isOffboarded: false,
};

export default vehicleOperatorLicense;
