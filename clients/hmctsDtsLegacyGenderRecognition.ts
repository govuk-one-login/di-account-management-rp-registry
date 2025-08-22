import { Client } from "../interfaces/client.interface";

const hmctsDtsLegacyGenderRecognition: Client = {
  clientId: {
    production: "PIS7mbqOcs7auNqL2v33aZqESBs",
    integration: "PIS7mbqOcs7auNqL2v33aZqESBs",
    nonProduction: "hmctsDtsLegacyGenderRecognition",
  },
  isAvailableInWelsh: true,
  showInAccounts: false,
  showInServices: true,
  showDetailedCard: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: true,
  translations: {
    en: {
      header: "Apply for a Gender Recognition Certificate",
      description:
        "Start or continue an application for a Gender Recognition Certificate.",
      linkText: "Go to the Gender Recognition Certificate service",
      linkUrl: "https://apply-gender-recognition-certificate.service.gov.uk/",
      startText: "Apply for a Gender Recognition Certificate",
      startUrl:
        "https://www.gov.uk/apply-gender-recognition-certificate/how-to-apply",
    },
    cy: {
      header: "Gwneud cais am Dystysgrif Cydnabod Rhywedd",
      description: "Dechrau neu barhau â chais am Dystysgrif Cydnabod Rhywedd.",
      linkText: "Ewch i'r gwasanaeth Tystysgrif Cydnabod Rhywedd",
      linkUrl: "https://apply-gender-recognition-certificate.service.gov.uk/",
      startText: "Gwneud cais am Dystysgrif Cydnabod Rhywedd",
      startUrl:
        "https://www.gov.uk/apply-gender-recognition-certificate/how-to-apply",
    },
  },
  isOffboarded: false,
};

export default hmctsDtsLegacyGenderRecognition;
