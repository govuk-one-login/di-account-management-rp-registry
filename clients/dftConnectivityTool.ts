import { Client } from "../interfaces/client.interface";

const dftConnectivityTool: Client = {
  clientId: {
    production: "-ntxNyJ7nMXdWL0VcTF_pTkv3z4",
    integration: "-ntxNyJ7nMXdWL0VcTF_pTkv3z4",
    nonProduction: "dftConnectivityTool",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Connectivity Tool",
      description:
        "Tool to help built environment professionals to understand how sustainably located a place is and the transport interventions needed to support it.",
      linkText: "Go to your Connectivity Tool",
      linkUrl: "https://connectivity-tool.dft.gov.uk/",
      startUrl: "https://www.gov.uk/guidance/connectivity-tool",
      startText: "Connectivity Tool from the Department for Transport",
    },
  },
  isOffboarded: false,
};

export default dftConnectivityTool;
