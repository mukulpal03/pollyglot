import { Request, Response } from "express";
import { translateUserMessageService } from "../services/translate";

export const translateController = async (req: Request, res: Response) => {
  try {
    const { userText, language } = req.body;
    const translatedText = await translateUserMessageService(userText, language);
    res.status(200).json({ userText, language, translatedText });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ message: "Failed to translate message" });
  }
};

export default translateController;
