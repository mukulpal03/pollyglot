import axios from "axios";

export const translateMessageApi = async (
  message: string,
  language: string,
) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/translate`,
      { userText: message, language },
    );

    return res?.data?.translatedText || "";
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ||
          error.message ||
          "Failed to connect to translation service",
      );
    }
    throw new Error("An unexpected error occurred");
  }
};
