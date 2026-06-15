import type AllQuizCategoryResponse from "../interfaces";

export const GetAllQuizCategory =
  async (): Promise<AllQuizCategoryResponse> => {
    const url = import.meta.env.VITE_OPENTDB_CATEGORY_URL;

    try {
      const res = await fetch(url, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching quiz categories:", error);
      throw error;
    }
  };
