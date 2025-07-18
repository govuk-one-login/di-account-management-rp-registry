import { Client } from "../interfaces/client.interface";

const lite: Client = {
  clientId: {
    production: "ZL0kvRBP5xMy5OwONj8ARLPyuko",
    integration: "JO3ET6EtFN3FzjGC3yRP2qpuoHQ",
    nonProduction: "lite",
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
      header: "LITE (Licensing for International Trade and Enterprise)",
      description:
        "Apply for or manage export control licences for controlled goods.",
      linkText: "Go to your LITE account",
      linkUrl: "https://exporter.lite.private-beta.service.trade.gov.uk/",
    },
  },
  isOffboarded: false,
};

export default lite;
