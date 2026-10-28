import { Client } from "../interfaces/client.interface";

const slcUpdateEmploymentDetailsStudentLoans: Client = {
  clientId: {
    production: "9SkhCaKfuz0jFmgDd6OtWTVgBvA", // pragma: allowlist secret
    integration: "9SkhCaKfuz0jFmgDd6OtWTVgBvA", // pragma: allowlist secret
    nonProduction: "slcUpdateEmploymentDetailsStudentLoans",
  },
  isAvailableInWelsh: true,
  showInAccounts: true,
  showInServices: false,
  showInActivityHistory: true,
  showInDeleteAccount: true,
  showInSearchableList: {
    production: new Date(2026, 10, 29),
    nonProduction: true,
  },
  translations: {
    en: {
      header: "Update your employment details with the Student Loans Company",
      description: "Tell SLC about your employment details, or let them know if you leave the UK for more than 3 months or have returned to the UK.",
      linkText: "Go to your Update your employment details with the Student Loans Company account",
      linkUrl: "https://www.update-student-loan-employment-details.service.gov.uk/open/captureresidency?locale=en&Idp=1",
      startUrl: "https://www.gov.uk/repaying-your-student-loan/update-your-employment-details",
      startText: "Update your employment details with the Student Loans Company",
    },
    cy: {
      header: "Diweddarwch eich manylion cyflogaeth gyda’r Cwmni Benthyciadau Myfyrwyr (SLC)",
      description: "Dywedwch wrth SLC am eich manylion cyflogaeth, neu rhowch wybod iddynt os byddwch yn gadael y DU am fwy na 3 mis neu os ydych wedi dychwelyd i’r DU.",
      linkText: "Ewch i Diweddarwch eich manylion cyflogaeth gyda’r Cwmni Benthyciadau Myfyrwyr (SLC)",
      linkUrl: "https://www.update-student-loan-employment-details.service.gov.uk/open/captureresidency?locale=cy&Idp=1 ",
      startUrl: "https://www.gov.uk/ad-dalu-eich-benthyciad-myfyriwr/diweddaru-eich-manylion-cyflogaeth",
      startText: "Diweddarwch eich manylion cyflogaeth gyda’r Cwmni Benthyciadau Myfyrwyr (SLC)",
    },
  },
  isOffboarded: false,
};

export default slcUpdateEmploymentDetailsStudentLoans;