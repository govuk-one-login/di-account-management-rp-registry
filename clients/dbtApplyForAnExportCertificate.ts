import { Client } from "../interfaces/client.interface";

const dbtApplyForAnExportCertificate: Client = {
  clientId: {
    production: "Xj93G5rMO2CsouiG8DJf36siQRk",
    integration: "Xj93G5rMO2CsouiG8DJf36siQRk",
    nonProduction: "dbtApplyForAnExportCertificate",
  },
  isAvailableInWelsh: false,
  clientType: "account",
  isHmrc: false,
  isReportSuspiciousActivityEnabled: false,
  isActivityLogEnabled: false,
  showInClientSearch: { production: true, nonProduction: true },
  translations: {
    en: {
      header: "Apply for an export certificate",
      description:
        "Apply for a certificate to export cosmetics, aerosols, pesticides or other goods.",
      linkText: "Go to your export certificate account",
      linkUrl:
        "https://apply-for-an-export-certificate.service.gov.uk/workbasket/",
      startUrl: "https://www.gov.uk/guidance/apply-for-an-export-certificate",
      startText: "Apply for an export certificate",
    },
  },
  isOffboarded: false,
};

export default dbtApplyForAnExportCertificate;
