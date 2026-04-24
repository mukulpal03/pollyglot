import { Request, Response } from "express";
import { translateUserMessageService } from "../services/translate";

export const translateController = async (req: Request, res: Response) => {
  const { userText, language } = req.body;

  const translatedText = await translateUserMessageService(userText, language);

  res.status(200).json({ userText, language, translatedText });
};

export default translateController;
