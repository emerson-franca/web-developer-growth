import {
  Brands,
  Footer,
  Header,
  Hero,
  Modules,
  Features,
  CTA,
} from "@/components";
import { getGlobalData, getPagesData } from "@/services/api";
import { ContentSection } from "@/types/index";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const pages = await getPagesData();

  if (!pages) return [];

  return pages.map((page) => ({
    slug: [page.locale, ...page.path.split("/").filter(Boolean)],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const { slug } = params;
  const locale = slug[0];

  const globalData = await getGlobalData(locale);

  return {
    title: globalData?.metadata.metaTitle || "Music API",
    description:
      globalData?.metadata.metaDescription ||
      "A comprehensive suite of cutting-edge Complementary AI™ modules, tailored to empower businesses and developers.",
    robots: globalData?.metadata.robots?.replace("_", ", ") || "index, follow",
    openGraph: globalData?.metadata.shareImage
      ? { images: [{ url: globalData.metadata.shareImage }] }
      : undefined,
  };
}

export default async function Home({ params }: PageProps) {
  const { slug } = params;
  const locale = slug[0];

  const [globalData, pages] = await Promise.all([
    getGlobalData(locale),
    getPagesData(),
  ]);

  if (!pages || !globalData) {
    console.error("Debug - Data fetch failed:", {
      pages: !!pages,
      globalData: !!globalData,
    });
    return (
      <div>
        <h1>Error Loading Page</h1>
        <p>Failed to fetch required data.</p>
      </div>
    );
  }

  const pageData = pages.find((page) => {
    const normalizedPagePath = page.path.replace(/^\/|\/$/g, "");
    const normalizedLocale = page.locale;

    return (
      normalizedLocale === locale &&
      (normalizedPagePath === "" || normalizedPagePath === locale)
    );
  });

  if (!pageData) {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Could not find the page data for the requested path and locale.</p>
      </div>
    );
  }

  const renderContentSection = (section: ContentSection) => {
    const components: Record<string, JSX.Element | null> = {
      "sections.hero-video": (
        <Hero
          key={section.id}
          title={section.title}
          description={section.description}
          buttons={section.buttons}
        />
      ),
      "sections.brands": <Brands key={section.id} {...section} />,
      "sections.card-content-grid": <Features key={section.id} {...section} />,
      "sections.centered-cta": <CTA key={section.id} {...section} />,
      "sections.modules": <Modules key={section.id} {...section} />,
    };

    return components[section.__component] || null;
  };

  return (
    <main>
      <Header menu={globalData.menu} />
      {pageData.contentSections?.map(renderContentSection)}

      <Footer
        helpText={globalData.helpText}
        social={globalData.social}
        footerMenu={globalData.footerMenu}
        copyright="2023 Developer, Inc. All rights reserved."
        status={{
          text: "All systems are normal",
          color: "#0AFFA7",
        }}
        currentLocale={locale}
      />
    </main>
  );
}
