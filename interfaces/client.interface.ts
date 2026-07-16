export type EnvironmentValue<T> =
  | T
  | {
      production: T;
      integration?: T;
      nonProduction: T;
    };

export interface CommonClientTranslations {
  header?: string;
  linkText?: string;
  linkUrl?: EnvironmentValue<string>;
  hintText?: string;
  startUrl?: string;
  startText?: string;
  additionalSearchTerms?: string;
}

interface ClientTranslationsWithDescription extends CommonClientTranslations {
  description?: string;
}

interface ClientTranslationsWithoutDescription extends CommonClientTranslations {
  description?: never;
}

export type ClientTranslations = ClientTranslationsWithDescription | ClientTranslationsWithoutDescription;
export type BooleanOrDate = boolean | Date;

interface CommonClient {
  clientId: EnvironmentValue<string>;
  isAvailableInWelsh: boolean;
  showInServices: BooleanOrDate;
  showInActivityHistory: BooleanOrDate;
  showInSearchableList: EnvironmentValue<BooleanOrDate>;
  showInDeleteAccount: BooleanOrDate;
  isOffboarded: BooleanOrDate;
  alternativeClients?: {
    en: CommonClientTranslations,
    cy?: CommonClientTranslations,
  }[];
}

interface NonAccountClient extends CommonClient {
  showInAccounts: false;
  translations?: {
    en: CommonClientTranslations;
    cy?: CommonClientTranslations;
  };
}

interface AccountClient extends CommonClient {
  showInAccounts: true | Date;
  translations?: {
    en: ClientTranslationsWithDescription;
    cy?: ClientTranslationsWithDescription;
  };
}

export type Client = AccountClient | NonAccountClient;

