import { Client } from "../interfaces/client.interface";

const relyingPartyStub: Client = {
  clientId: {
    production: "5Vfplamzln0AoarlnX5CX4UTqyh59xfA",
    integration: "5Vfplamzln0AoarlnX5CX4UTqyh59xfA",
    nonProduction: "relyingPartyStub",
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

export default relyingPartyStub;
