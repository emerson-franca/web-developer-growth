export interface LanguageSwitcherProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}
