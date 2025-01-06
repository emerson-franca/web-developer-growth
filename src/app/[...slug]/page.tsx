import { Brands, Footer, Header, Hero, Modules } from "@/components";
import type { GlobalData, PageData } from "@/types/index";

async function getGlobalData(lang: string): Promise<GlobalData | null> {
  try {
    const response = await fetch(
      `http://localhost:4000/global?locale=${lang}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch global data");
    }

    return response.json() as Promise<GlobalData>;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}

async function getPagesData(): Promise<PageData[] | null> {
  try {
    const response = await fetch(`http://localhost:4000/pages`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch page data");
    }

    return response.json() as Promise<PageData[]>;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const pages = await getPagesData();

  if (!pages) return [];

  return pages.map((page) => ({
    slug: [page.locale, ...page.path.split("/").filter(Boolean)],
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
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

  return (
    <main>
      <Header menu={globalData.menu} />
      {pageData.contentSections?.map((section) => {
        switch (section.__component) {
          case "sections.hero-video":
            return (
              <Hero
                key={section.id}
                title={section.title}
                description={section.description}
                buttons={section.buttons}
              />
            );
          case "sections.brands":
            return <Brands key={section.id} brands={section.brands} />;
          case "sections.modules":
            return (
              <Modules
                key={section.id}
                preTitle={section.preTitle}
                title={section.title}
                description={section.description}
                cards={section.cards}
              />
            );
          default:
            return null;
        }
      })}
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
