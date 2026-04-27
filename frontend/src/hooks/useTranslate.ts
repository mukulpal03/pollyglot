import { useState, useEffect, useCallback } from "react";
import { translateMessageApi } from "../api";

export const useTranslate = (message: string, language: string) => {
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = useCallback(async (text: string, lang: string) => {
    if (!text.trim()) {
      setTranslatedText("");
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const res = await translateMessageApi(text, lang);
      setTranslatedText(res);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to translate";
      setError(errorMessage || "An unexpected error occurred");
      setTranslatedText("");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!message.trim()) {
      setTranslatedText("");
      setError(null);
      return;
    }

    setError(null);
    const timer = setTimeout(() => {
      translate(message, language);
    }, 600);

    return () => clearTimeout(timer);
  }, [message, language, translate]);

  return { translatedText, isLoading, error };
};
