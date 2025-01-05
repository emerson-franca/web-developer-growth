import Image from "next/image";
import { styles } from "./styles";
import { BrandsProps } from "./types";

export const Brands = ({ brands }: BrandsProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.slider}>
            {brands.map((brand) => (
              <div key={brand.id} className={styles.brand}>
                <Image
                  src={brand.url}
                  alt={brand.title}
                  width={200}
                  height={64}
                  className={styles.brandImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
