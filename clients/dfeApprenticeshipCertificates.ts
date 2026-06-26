import { Client } from "../interfaces/client.interface";

const dfeApprenticeshipCertificates: Client = {
  clientId: {
    production: "CEWySFSPKpDSIsg7ooTZoaGYPLI",
    integration: "CEWySFSPKpDSIsg7ooTZoaGYPLI",
    nonProduction: "dfeApprenticeshipCertificates",
  },
  isAvailableInWelsh: false,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Apprenticeship certificates",
      description:
        "View, share or download your certificates, or view your results.",
      linkText: "Go to your Apprenticeship certificates account",
      linkUrl:
        "https://certificates.apprenticeships.education.gov.uk/certificates/list",
    },
  },
  isOffboarded: false,
};

export default dfeApprenticeshipCertificates;
