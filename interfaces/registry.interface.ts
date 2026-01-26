import { Translation } from "./translations.interface";

export interface RegistryEntry {
  clientId: string;
  isAvailableInWelsh: boolean;
  showInAccounts: boolean;
  showInServices: boolean;
  showDetailedCard: boolean;
  showInActivityHistory: boolean;
  showInSearchableList: boolean;
  showInDeleteAccount: boolean;
  isOffboarded: boolean;
  alternativeClients?: {
    en: Translation,
    cy?: Translation,
  }[]
}
