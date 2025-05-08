interface TranslationCache {
  [key: string]: {
    text: string;
    timestamp: number;
  };
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const translationCache: TranslationCache = {};

// Google Cloud Translation API endpoint
const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

export async function translateText(
  text: string,
  sourceLanguage: string,
  targetLanguage: string
): Promise<string> {
  const cacheKey = `${text}-${sourceLanguage}-${targetLanguage}`;
  const cachedTranslation = translationCache[cacheKey];

  // Check if we have a valid cached translation
  if (cachedTranslation && Date.now() - cachedTranslation.timestamp < CACHE_DURATION) {
    return cachedTranslation.text;
  }

  try {
    // Get API key from environment variable
    const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
    
    if (!apiKey) {
      throw new Error('Google Translate API key is not configured');
    }

    const response = await fetch(`${GOOGLE_TRANSLATE_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Translation request failed');
    }

    const data = await response.json();
    
    if (!data.data?.translations?.[0]?.translatedText) {
      throw new Error('Invalid translation response');
    }

    const translatedText = data.data.translations[0].translatedText;
    
    // Cache the translation
    translationCache[cacheKey] = {
      text: translatedText,
      timestamp: Date.now(),
    };

    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error(error instanceof Error ? error.message : 'Translation failed. Please try again.');
  }
}

export function clearTranslationCache(): void {
  Object.keys(translationCache).forEach(key => {
    delete translationCache[key];
  });
}

export function getCachedTranslationCount(): number {
  return Object.keys(translationCache).length;
} 