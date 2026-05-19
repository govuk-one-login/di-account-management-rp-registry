export interface Translation {
  header: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  hintText?: string;
  startText?: string;
  startUrl?: string;
  additionalSearchTerms?: string;
}

export type TranslationsObject = Record<string, Translation>;
