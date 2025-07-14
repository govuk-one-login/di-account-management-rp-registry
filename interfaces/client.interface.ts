export type EnvironmentValue<T> =
  | T
  | {
      production: T;
      integration?: T;
      nonProduction: T;
    };

interface Translations {
  header?: string;
  description?: string;
  linkText?: string;
  linkUrl?: EnvironmentValue<string>;
  hintText?: string;
  paragraph1?: string;
  paragraph2?: string;
  startUrl?: string;
  startText?: string;
  additionalSearchTerms?: string[];
}

interface BaseClient {
  clientId: EnvironmentValue<string>;
  translations?: {
    en: Translations;
    cy?: Translations;
  };
  isAvailableInWelsh: boolean;
  showInAccounts: boolean;
  showInServices: boolean;
  showDetailedCard: boolean;
  showInActivityHistory: boolean;
  showInSearchableList: EnvironmentValue<boolean>;
  showInDeleteAccount: boolean;
  isOffboarded: boolean;
}

export type Client = BaseClient;
