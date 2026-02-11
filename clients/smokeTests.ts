import { Client } from "../interfaces/client.interface";

const smokeTests: Client = {
  clientId: {
    production: "db2488166f2b2b0574de727a60a9e981",
    integration: "db2488166f2b2b0574de727a60a9e981",
    nonProduction: "smokeTests",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: false,
  showDetailedCard: false,

  showInActivityHistory: false,
  showInDeleteAccount: false,
  showInSearchableList: false,
  isOffboarded: false,
};

export default smokeTests;
