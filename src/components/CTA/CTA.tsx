import type { CTAProps } from "./types";
import { styles } from "./styles";
import { Button } from "@/components/Button";

export const CTA = ({ preTitle, title, description, buttons }: CTAProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {preTitle && <h2 className={styles.preTitle}>{preTitle}</h2>}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonsContainer}>
          {buttons.map((button) => (
            <Button key={button.id} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};
