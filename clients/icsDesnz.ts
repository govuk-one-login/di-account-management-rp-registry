import { Client } from "../interfaces/client.interface";

const icsDesnz: Client = {
  clientId: {
    production: "ylIM6FsPzeV5fN09v4cl2aDbpnE",
    integration: "ylIM6FsPzeV5fN09v4cl2aDbpnE",
    nonProduction: "icsDesnz",
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
      header: "Manage the Clean Heat Market Mechanism",
      description: "Report boiler sales and get CHMM credits.",
      linkText: "Go to your M-CHMM account",
      linkUrl:
        "https://manage-clean-heat-market-mechanism.service.gov.uk/scheme-year",
    },
  },
  isOffboarded: false,
};

export default icsDesnz;
