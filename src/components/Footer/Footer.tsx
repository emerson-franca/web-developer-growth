"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { styles } from "./styles";
import type { FooterProps, SocialKeys } from "./types";
import { LanguageSwitcher } from "../LanguageSwitcher";
import {
  Facebook,
  Instagram,
  Linkedin,
  TikTok,
  Twitter,
  Youtube,
  LogoFooter,
} from "@/components/Icons";

export const Footer = ({
  footerMenu,
  helpText,
  copyright,
  status,
  currentLocale,
  social,
}: FooterProps) => {
  const router = useRouter();

  const SOCIAL_ICON: Record<SocialKeys, JSX.Element> = {
    facebook: <Facebook width={24} height={24} />,
    instagram: <Instagram width={24} height={24} />,
    twitter: <Twitter width={24} height={24} />,
    linkedIn: <Linkedin width={24} height={24} />,
    youTube: <Youtube width={24} height={24} />,
    tikTok: <TikTok width={24} height={24} />,
  };

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LogoFooter />
        <div className={styles.helpText}>{helpText}</div>
        <div className={styles.content}>
          <div>
            <div>
              <LanguageSwitcher
                currentLocale={currentLocale}
                onLocaleChange={handleLocaleChange}
              />
            </div>
            <div className={styles.social}>
              {Object.keys(social).map((key) => (
                <Link
                  key={key}
                  href={social[key as SocialKeys] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SOCIAL_ICON[key as SocialKeys]}
                </Link>
              ))}
            </div>
          </div>
          <nav className={styles.nav}>
            {footerMenu.map((section) => (
              <div key={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.dropdown && (
                  <ul className={styles.linksList}>
                    {section.dropdown.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.link || "#"}
                          className={styles.link}
                          target={item.openNewWindow ? "_blank" : undefined}
                          rel={
                            item.openNewWindow
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.status}>
            Status
            <span
              className={styles.statusDot}
              style={{ backgroundColor: status.color }}
            />
            <span className={styles.statusText}>{status.text}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
