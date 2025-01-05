export interface Brand {
  id: number;
  alternativeText: string | null;
  title: string;
  url: string;
}

export interface BrandsProps {
  brands: Brand[];
}
