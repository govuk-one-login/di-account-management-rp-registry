import { Client } from "../interfaces/client.interface";

const dhscNihrVolunteers: Client = {
  clientId: {
    production: "0NZ61WqumNsH8cuaIZ8MxJoyjkQ",
    integration: "0NZ61WqumNsH8cuaIZ8MxJoyjkQ",
    nonProduction: "dhscNihrVolunteers",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: false,
  translations: {
    en: {
      header: "Recruit registry volunteers",
      linkText: "Go to your Recruit registry volunteers account",
      linkUrl:
        "https://nihr-rrv.nhsbsa.nhs.uk/recruit-registry-volunteers/researcher/enter-your-details",
      description:
        "Recruit participants from the national registry for your health or social care research study.",
    },
    cy: {
      header: "Recriwtio gwirfoddolwyr y gofrestr",
      description: "Recriwtio cyfranogwyr o'r gofrestrfa genedlaethol ar gyfer eich astudiaeth ymchwil iechyd neu ofal cymdeithasol.",
      linkText: "Ewch i'ch cyfrif Recriwtio gwirfoddolwyr y gofrestr",
      linkUrl: "https://nihr-rrv.nhsbsa.nhs.uk/recruit-registry-volunteers/researcher/enter-your-details",
    },
  },
  isOffboarded: false,
};

export default dhscNihrVolunteers;
