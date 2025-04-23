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
}

interface BaseClient {
  clientId: EnvironmentValue<string>;
  translations: {
    en: Translations;
  };
  isAllowed: boolean;
  clientType: "service" | "account" | "home" | "internal";
  isHmrc: boolean;
  isReportSuspiciousActivityEnabled: boolean;
  isActivityLogEnabled: boolean;
  showInClientSearch: EnvironmentValue<boolean>;
  isAvailableInWelsh: boolean;
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
