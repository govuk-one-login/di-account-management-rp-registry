export type EnvironmentValue<T> =
  | T
  | {
      production: T;
      integration?: T;
      nonProduction: T;
    };

export interface ClientTranslations {
  header?: string;
  description?: string;
  linkText?: string;
  linkUrl?: EnvironmentValue<string>;
  hintText?: string;
  paragraph1?: string;
  paragraph2?: string;
  startUrl?: string;
  startText?: string;
  additionalSearchTerms?: string;
}

export type BooleanOrDate = boolean | Date;

interface BaseClient {
  clientId: EnvironmentValue<string>;
  translations?: {
    en: ClientTranslations;
    cy?: ClientTranslations;
  };
  isAvailableInWelsh: boolean;
  showInAccounts: BooleanOrDate;
  showInServices: BooleanOrDate;
  showDetailedCard: BooleanOrDate;
  showInActivityHistory: BooleanOrDate;
  showInSearchableList: EnvironmentValue<BooleanOrDate>;
  showInDeleteAccount: BooleanOrDate;
  isOffboarded: BooleanOrDate;
  alternativeClients?: {
    en: ClientTranslations,
    cy?: ClientTranslations,
  }[]
}

export type Client = BaseClient;
