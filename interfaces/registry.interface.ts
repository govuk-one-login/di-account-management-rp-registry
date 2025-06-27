export interface RegistryEntry {
  clientId: string;
  isOffboarded: boolean;
  clientType: "service" | "account" | "home" | "internal" | "govukApp";
  isHmrc: boolean;
  isReportSuspiciousActivityEnabled: boolean;
  isActivityLogEnabled: boolean;
  showInClientSearch: boolean;
  isAvailableInWelsh: boolean;
}
