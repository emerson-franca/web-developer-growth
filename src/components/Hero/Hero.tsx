import { Play } from "@/components/Icons";
import { HeroProps } from "./types";
import { Button } from "@/components/Button";
import { styles } from "./styles";

export const Hero = ({ title, description, buttons }: HeroProps) => {
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.heading}>
            {title}
          </h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.tryNowSection}>
            <p className={styles.tryNowText}>Try now</p>
            <div className={styles.playerWrapper}>
              <button
                type="button"
                aria-label="Play sample track"
                className={styles.playButton}
              >
                <Play width={20} height={20} />
                <span className="sr-only">Play sample track</span>
              </button>

              <div className={styles.waveformContainer}>
                <div className={styles.waveform} role="presentation">
                  <div className={styles.waveformImage} />
                </div>
              </div>

              <div className={styles.separator} role="separator" />

              <button
                type="button"
                className={styles.uploadButton}
                aria-label="Upload your own track"
              >
                Upload your own track
              </button>
            </div>
          </div>

          <div className={styles.buttonsContainer}>
            {buttons?.map((button) => (
              <Button key={button.id} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
