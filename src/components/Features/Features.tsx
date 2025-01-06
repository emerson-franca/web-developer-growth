import React from "react";
import {
  Device,
  MusicControl,
  PlayOnRepeat,
  Lock,
  Rocket,
  Flash,
} from "@/components/Icons";
import type { FeaturesProps } from "./types";
import { styles } from "./styles";

const iconMap: Record<string, JSX.Element> = {
  "offload-device": <Device />,
  "music-control": <MusicControl />,
  "play-on-repeat": <PlayOnRepeat />,
  lock: <Lock />,
  rocket: <Rocket />,
  flash: <Flash />,
};

export const Features = ({
  preTitle,
  title,
  description,
  cards,
}: FeaturesProps) => {
  return (
    <section className={`${styles.section}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.preTitle}>{preTitle}</h2>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.icon}>{iconMap[card.icon]}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
