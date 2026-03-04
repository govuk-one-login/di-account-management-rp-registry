import { Client } from "../interfaces/client.interface";

const applyForMedal: Client = {
  clientId: {
    production: "4Yq7YU-dsyVC_edOiAZRynuEKKI",
    integration: "4Yq7YU-dsyVC_edOiAZRynuEKKI",
    nonProduction: "applyForMedal",
  },
  isAvailableInWelsh: false,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Apply for a medal",
      description:
        "Apply for or replace a medal, or check which medals you can get.",
      linkText: "Apply for a medal",
      linkUrl:
        "https://www.gov.uk/apply-medal-or-veterans-badge/apply-for-a-medal",
    },
  },
  isOffboarded: false,
};

export default applyForMedal;
