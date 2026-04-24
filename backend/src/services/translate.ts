import openai from "../config/llm";
import { SYSTEM_PROMPT } from "../utils/prompt";

export const translateUserMessageService = async (
  userText: string,
  language: string,
) => {
  try {
    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL,
      input: `Translate the following text into ${language}:

            "${userText}"`,
      instructions: SYSTEM_PROMPT,
      reasoning: { effort: "low" },
      max_output_tokens: 300,
    });

    return response.output_text;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
