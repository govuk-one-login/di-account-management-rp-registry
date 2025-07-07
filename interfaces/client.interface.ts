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
}

interface BaseClient {
  clientId: EnvironmentValue<string>;
  translations: {
    en: Translations;
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

interface WelshClient extends BaseClient {
  isAvailableInWelsh: true;
  translations: {
    en: Translations;
    cy: Translations;
  };
}

interface NonWelshClient extends BaseClient {
  isAvailableInWelsh: false;
  translations: {
    en: Translations;
  };
}

export type Client = NonWelshClient | WelshClient;
