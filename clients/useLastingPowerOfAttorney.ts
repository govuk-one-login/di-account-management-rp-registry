import { Client } from "../interfaces/client.interface";

const useLastingPowerOfAttorney: Client = {
  clientId: {
    production: "DduaLZl49t9hHADHyzJBmEwvbsw",
    integration: "DduaLZl49t9hHADHyzJBmEwvbsw",
    nonProduction: "useLastingPowerOfAttorney",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Use a lasting power of attorney",
      description: "Share details of a lasting power of attorney.",
      linkText: "Go to the Use a Lasting Power of Attorney service",
      linkUrl:
        "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
      startUrl: "https://www.gov.uk/use-lasting-power-of-attorney",
      startText: "Use a lasting power of attorney",
    },
    cy: {
      header: "Defnyddio pwer atwrnai parhaus",
      description: "Rhannu manylion pwer atwrnai parhaus.",
      linkText: "Ewch i'r gwasanaeth Defnyddio Pŵer Atwrnai Parhaol",
      linkUrl:
        "https://use-lasting-power-of-attorney.service.gov.uk/lpa/dashboard",
      startUrl: "https://www.gov.uk/defnyddio-atwrneiaeth-arhosol",
      startText: "Defnyddio pwer atwrnai parhaus",
    },
  },
  isOffboarded: false,
};

export default useLastingPowerOfAttorney;
