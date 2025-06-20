import { Client } from "../interfaces/client.interface";

const useLastingPowerOfAttorney: Client = {
  clientId: {
    production: "DduaLZl49t9hHADHyzJBmEwvbsw",
    integration: "DduaLZl49t9hHADHyzJBmEwvbsw",
    nonProduction: "useLastingPowerOfAttorney",
  },
  isAvailableInWelsh: true,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Use a lasting power of attorney",
      description: "Share details of a lasting power of attorney",
      linkText: "Go to your lasting power of attorney dashboard",
      linkUrl:
        "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
      startUrl: "https://www.gov.uk/use-lasting-power-of-attorney",
      startText: "use a lasting power of attorney",
    },
    cy: {
      header: "Defnyddio pwer atwrnai parhaus",
      description: "Rhannu manylion pwer atwrnai parhaus.",
      linkText: "Ewch i'ch dangosfwrdd pwer atwrnai parhaus",
      linkUrl:
        "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
      startUrl: "https://www.gov.uk/defnyddio-atwrneiaeth-arhosol",
      startText: "Defnyddio pwer atwrnai parhaus",
    },
  },
  isOffboarded: false,
};

export default useLastingPowerOfAttorney;
