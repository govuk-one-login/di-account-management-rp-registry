export interface RegistryEntry {
  clientId: string;
  isAllowed: boolean;
  clientType: "service" | "account" | "home" | "internal";
  isHmrc: boolean;
  isReportSuspiciousActivityEnabled: boolean;
  isActivityLogEnabled: boolean;
  showInClientSearch: boolean;
  isAvailableInWelsh: boolean;
}
