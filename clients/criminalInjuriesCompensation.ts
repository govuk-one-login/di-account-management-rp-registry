import { Client } from "../interfaces/client.interface";

const criminalInjuriesCompensation: Client = {
  clientId: {
    production: "bGAwNKM0XvnxCAuDQ_rMhhP3dxM",
    integration: "bGAwNKM0XvnxCAuDQ_rMhhP3dxM",
    nonProduction: "criminalInjuriesCompensation",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: true,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Criminal injuries compensation",
      description:
        "Start or continue an application to get compensation for injuries and losses if you've been a victim of violent crime.",
      linkText: "Go to your criminal injuries compensation account",
      linkUrl:
        "https://claim-criminal-injuries-compensation.service.justice.gov.uk/account",
      startUrl:
        "https://www.gov.uk/claim-compensation-criminal-injury/make-claim",
      startText: "Claim compensation if you were the victim of a violent crime",
    },
  },
  isOffboarded: false,
};

export default criminalInjuriesCompensation;
