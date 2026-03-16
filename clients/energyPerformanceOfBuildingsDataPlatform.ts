import { Client } from "../interfaces/client.interface";

const energyPerformanceOfBuildingsDataPlatform: Client = {
  clientId: {
    production: "H_F1fKr2H20kQ6TJhgz5k3-KzTc",
    integration: "H_F1fKr2H20kQ6TJhgz5k3-KzTc",
    nonProduction: "energyPerformanceOfBuildingsDataPlatform",
  },
  isAvailableInWelsh: false, 
  showInAccounts: true,  
  showInServices: false, 
  showDetailedCard: false,
  showInActivityHistory: true, 
  showInDeleteAccount: true, 
  showInSearchableList: false, 

  translations: {
    en: {
      header: "Energy performance of buildings data",
      description:
        "Access data from the Energy Performance of Buildings register.",
      linkText: "Go to your energy performance of buildings data account",
      linkUrl: "https://get-energy-performance-data.communities.gov.uk",
    },
  },
  isOffboarded: false,
};

export default energyPerformanceOfBuildingsDataPlatform; 
