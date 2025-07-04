export type EnvironmentValue<T> =
  | T
  | {
      production: T;
      integration?: T;
      nonProduction: T;
    };

export interface Translation {
  header: string;
  description?: string;
  linkText?: string;
  linkUrl?: EnvironmentValue<string>;
  hintText?: string;
  paragraph1?: string;
  paragraph2?: string;
  startUrl?: string;
  startText?: string;
}

export type TranslationsObject = Record<string, Translation>;
export interface Client {
  clientId: EnvironmentValue<string>;
  translations?: {
    en: Translation;
    cy?: Translation;
  };
  isAvailableInWelsh: boolean;
  showInAccounts: boolean;
  showInServices: boolean;
  showDetailedCard: boolean;
  showInActivityHistory: boolean;
  showInSearchableList: boolean;
  showInDeleteAccount: boolean;
  isOffboarded: boolean;
}
