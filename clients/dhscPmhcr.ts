import { Client } from "../interfaces/client.interface";

const dhscPmhcr: Client = {
  clientId: {
    production: "78jhcClFeoQMdZ_QInarLsuQncQ",
    integration: "78jhcClFeoQMdZ_QInarLsuQncQ",
    nonProduction: "dhscPmhcr",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: false,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Plan and manage health and care research.",
      linkText: "Go to your Plan and manage health and care research account.",
      linkUrl:
        "https://fd-rsp-applications-prod-uks-dqa3dydwg4h6f6dp.a02.azurefd.net/",
      description:
        "Use this service for making changes to research that has previously been approved. At this time, you should only use this service if you have been invited to do so.",
      startUrl:
        "https://fd-rsp-applications-prod-uks-dqa3dydwg4h6f6dp.a02.azurefd.net/",
      startText: "Plan and manage health and care research.",
    },
  },
  isOffboarded: false,
};

export default dhscPmhcr;
