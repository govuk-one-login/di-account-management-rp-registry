import { Client } from "../interfaces/client.interface";

const relyingPartyStub: Client = {
  clientId: {
    production: "5Vfplamzln0AoarlnX5CX4UTqyh59xfA",
    integration: "5Vfplamzln0AoarlnX5CX4UTqyh59xfA",
    nonProduction: "relyingPartyStub",
  },
  isAvailableInWelsh: false,
  clientType: "internal",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {},
  },
};

export default relyingPartyStub;
