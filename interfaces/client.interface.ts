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
  additionalSearchTerms?: string;
}

export type BooleanOrDate = boolean | Date;

interface BaseClient {
  clientId: EnvironmentValue<string>;
  translations?: {
    en: Translations;
    cy?: Translations;
  };
  isAvailableInWelsh: boolean;
  showInAccounts: BooleanOrDate;
  showInServices: BooleanOrDate;
  showDetailedCard: BooleanOrDate;
  showInActivityHistory: BooleanOrDate;
  showInSearchableList: EnvironmentValue<BooleanOrDate>;
  showInDeleteAccount: BooleanOrDate;
  isOffboarded: BooleanOrDate;
}

export type Client = BaseClient;
