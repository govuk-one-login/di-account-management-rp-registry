import { Client } from "../interfaces/client.interface";

const ofgemHeatNetworks: Client = {
  clientId: {
    production: "18wwAdm_lMyUAChqxnTZWyAksFQ",
    integration: "18wwAdm_lMyUAChqxnTZWyAksFQ",
    nonProduction: "ofgemHeatNetworks",
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
      header: "Comply with heat networks consumer protection regulations",
      description:
        "Start or continue providing information about your organisation and registering your heat networks with Ofgem.",
      linkText: "Go to the Comply with heat networks consumer protection regulations service",
      linkUrl: "heat-network-consumer-protections.ofgem.gov.uk",
      startUrl: "https://www.ofgem.gov.uk/energy-regulation/low-carbon/heat-networks/comply-heat-networks-consumer-protection-regulations",
    },
  },
  isOffboarded: false,
};

export default ofgemHeatNetworks;
