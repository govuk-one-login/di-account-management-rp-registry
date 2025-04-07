import { Client } from "../interfaces/client.interface";

const ruralPaymentWales: Client = {
  clientId: {
    production: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    integration: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    nonProduction: "ruralPaymentWales",
  },
  isAvailableInWelsh: false,
  isAllowed: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: false, nonProduction: false },
  translations: {
    en: {
      header: "Rural Payment Wales",
      description: "Apply for a Rural Payment Wales grant or payment.",
      linkText: "Go to your Rural Payment Wales account",
      linkUrl: "https://rpwonline.gov.wales",
    },
  },
};

export default ruralPaymentWales;
