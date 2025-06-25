import { Client } from "../interfaces/client.interface";

const dftConnectivityTool: Client = {
  clientId: {
    production: "-ntxNyJ7nMXdWL0VcTF_pTkv3z4",
    integration: "-ntxNyJ7nMXdWL0VcTF_pTkv3z4",
    nonProduction: "dftConnectivityTool",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Connectivity Tool",
      description:
        "Tool to help built environment professionals to understand how sustainably located a place is and the transport interventions needed to support it.",
      linkText: "Go to your Connectivity Tool",
      linkUrl: "https://connectivity-tool.dft.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default dftConnectivityTool;