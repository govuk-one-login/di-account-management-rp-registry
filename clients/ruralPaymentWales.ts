import { Client } from "../interfaces/client.interface";

const ruralPaymentWales: Client = {
  clientId: {
    production: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    integration: "SdpFRM0HdX38FfdbgRX8qzTl8sm",
    nonProduction: "ruralPaymentWales",
  },
  isAvailableInWelsh: true,
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
      startUrl: "https://rpwonline.gov.wales/",
      startText: "Rural Payments Wales (RPW)",
    },
    cy: {
      header: "Taliadau Gwledig Cymru",
      description: "Gwneud cais am grant neu daliad Taliadau Gwledig Cymru.",
      linkText: "Ewch i'ch cyfrif Taliad Gwledig Cymru",
      linkUrl: "https://rpwonline.gov.wales",
      startUrl: "https://rpwonline.gov.wales/",
      startText: "Taliadau Gwledig Cymru",
    },
  },
  isOffboarded: false,
};

export default ruralPaymentWales;
