import { Client } from "../interfaces/client.interface";

const hmctsDtsLegacyGenderRecognition: Client = {
  clientId: {
    production: "PIS7mbqOcs7auNqL2v33aZqESBs",
    integration: "PIS7mbqOcs7auNqL2v33aZqESBs",
    nonProduction: "hmctsDtsLegacyGenderRecognition",
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
      header: "Apply for a Gender Recognition Certificate",
      description:
        "Continue your application for a Gender Recognition Certificate.",
      linkText: "Go to your Gender Recognition Certificate application",
      linkUrl: "https://apply-gender-recognition-certificate.service.gov.uk/",
      startText: "Apply for a Gender Recognition Certificate",
      startUrl:
        "https://www.gov.uk/apply-gender-recognition-certificate/how-to-apply",
    },
    cy: {
      header: "Gwneud cais am Dystysgrif Cydnabod Rhywedd",
      description: "Parhewch â'ch cais am Dystysgrif Cydnabod Rhywedd.",
      linkText: "Ewch i'ch cais am Dystysgrif Cydnabod Rhywedd",
      linkUrl: "https://apply-gender-recognition-certificate.service.gov.uk/",
      startText: "Gwneud cais am Dystysgrif Cydnabod Rhywedd",
      startUrl:
        "https://www.gov.uk/apply-gender-recognition-certificate/how-to-apply",
    },
  },
  isOffboarded: false,
};

export default hmctsDtsLegacyGenderRecognition;
