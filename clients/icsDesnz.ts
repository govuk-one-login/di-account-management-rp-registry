import { Client } from "../interfaces/client.interface";

const icsDesnz: Client = {
  clientId: {
    production: "ylIM6FsPzeV5fN09v4cl2aDbpnE",
    integration: "ylIM6FsPzeV5fN09v4cl2aDbpnE",
    nonProduction: "icsDesnz",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Manage the Clean Heat Market Mechanism",
      description: "Report boiler sales and get CHMM credits.",
      linkText: "Go to your M-CHMM account",
      linkUrl:
        "https://manage-clean-heat-market-mechanism.service.gov.uk/scheme-year",
    },
  },
};

export default icsDesnz;
