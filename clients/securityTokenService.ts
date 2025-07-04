import { Client } from "../interfaces/client.interface";

const securityTokenService: Client = {
  clientId: {
    production: "ibRd7MKF-uTB5tVtQQvc84lklrc",
    integration: "ibRd7MKF-uTB5tVtQQvc84lklrc",
    nonProduction: "securityTokenService",
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

export default securityTokenService;
