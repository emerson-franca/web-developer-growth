"use client";

import { useState, useCallback } from "react";
import { styles } from "./styles";
import type { LanguageSwitcherProps } from "./types";
import { useRouter } from "next/navigation";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

export const LanguageSwitcher = ({
  currentLocale,
  onLocaleChange,
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const currentLanguage =
    LOCALES.find((locale) => locale.code === currentLocale)?.label ||
    LOCALES[0].label;

  const switchLanguage = useCallback(
    (newLocale: string) => {
      router.push(`/${newLocale}`);
    },
    [router]
  );

  const handleOptionClick = useCallback(
    (code: string) => {
      if (typeof onLocaleChange === "function") {
        onLocaleChange(code);
        switchLanguage(code);
        setIsOpen(false);
      }
    },
    [onLocaleChange, switchLanguage]
  );

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {currentLanguage}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={styles.dropdown}
          role="listbox"
          aria-label="Select language"
        >
          {LOCALES.map((locale) => (
            <div
              key={locale.code}
              className={`${styles.option} ${
                locale.code === currentLocale ? styles.optionActive : ""
              }`}
              role="option"
              aria-selected={locale.code === currentLocale}
              onClick={() => handleOptionClick(locale.code)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleOptionClick(locale.code);
                }
              }}
              tabIndex={0}
            >
              {locale.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
