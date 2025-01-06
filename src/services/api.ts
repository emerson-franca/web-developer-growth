import type { GlobalData, PageData } from "@/types/index";

export async function getGlobalData(lang: string): Promise<GlobalData | null> {
  try {
    const response = await fetch(`http://localhost:4000/global?locale=${lang}`);
    if (!response.ok) {
      console.error("Failed to fetch global data");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}

export async function getPagesData(): Promise<PageData[] | null> {
  try {
    const response = await fetch(`http://localhost:4000/pages`);
    if (!response.ok) {
      console.error("Failed to fetch page data");
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}
