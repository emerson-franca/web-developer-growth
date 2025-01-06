export type Card = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type FeaturesProps = {
  preTitle: string;
  title: string;
  description: string;
  cards: Card[];
};
