import { Client } from "../interfaces/client.interface";

const smokeTests: Client = {
  clientId: {
    production: "MjQc1h7nFVbNM05iawAdkkZ2W89uloDK",
    integration: "MjQc1h7nFVbNM05iawAdkkZ2W89uloDK",
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
