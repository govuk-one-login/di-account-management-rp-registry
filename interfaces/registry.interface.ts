export interface RegistryEntry {
  clientId: string;
  isAllowed: boolean;
  clientType: "service" | "account" | "home";
  isHmrc: boolean;
  isReportSuspiciousActivityEnabled: boolean;
  showInClientSearch: boolean;
  isAvailableInWelsh: boolean;
}
