import type { GlobalData, PageData } from "@/types/index";
import { BASE_URL } from "@/utils/constants";

export async function getGlobalData(lang: string): Promise<GlobalData | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/api/global?locale=${encodeURIComponent(lang)}`
    );
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
    const response = await fetch(`${BASE_URL}/api/pages`);
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
