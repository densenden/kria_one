import axios from 'axios';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;
const RAPIDAPI_URL = process.env.RAPIDAPI_URL;

export type Language = 'de' | 'en' | 'es' | 'pt';

export async function translateText(text: string, targetLang: Language): Promise<string> {
  try {
    const response = await axios.post(
      RAPIDAPI_URL!,
      {
        text,
        target_lang: targetLang,
      },
      {
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.translated_text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text
  }
}

export async function translatePageContent(content: Record<string, any>, targetLang: Language): Promise<Record<string, any>> {
  const translatedContent: Record<string, any> = {};

  for (const [key, value] of Object.entries(content)) {
    if (typeof value === 'string') {
      translatedContent[key] = await translateText(value, targetLang);
    } else if (typeof value === 'object' && value !== null) {
      translatedContent[key] = await translatePageContent(value, targetLang);
    } else {
      translatedContent[key] = value;
    }
  }

  return translatedContent;
} 