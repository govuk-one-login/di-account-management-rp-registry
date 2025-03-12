export interface RegistryEntry {
  clientId: string;
  isAllowed: boolean;
  clientType: "service" | "account";
  isHmrc: boolean;
  isReportSuspiciousActivityEnabled: boolean;
  showInClientSearch: boolean;
  isAvailableInWelsh: boolean;
}
