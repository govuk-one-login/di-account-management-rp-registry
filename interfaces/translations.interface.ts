export interface Translation {
  header: string;
  description?: string;
  link_text: string;
  link_href: string;
  hint_text?: string;
  paragraph1?: string;
  paragraph2?: string;
  start_text?: string;
  start_href?: string;
}

export type TranslationsObject = Record<string, Translation>;
