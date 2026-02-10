import { GoogleGenerativeAI } from '@google/generative-ai';
import { useState } from 'react';

const apiKey = process.env.GEMINI_API_KEY || '';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateProjectDescription = async (
    title: string,
    tech: string[],
    currentDescription: string
  ): Promise<string> => {
    setLoading(true);
    setError(null);

    try {
      if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
        throw new Error('Gemini API key is not configured. Please add your API key to .env.local');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

      const prompt = `You are a professional portfolio content writer. Generate an engaging, professional project description for a software project.

Project Title: ${title}
Technologies Used: ${tech.join(', ')}
Current Description: ${currentDescription}

Create a compelling 2-3 sentence description that:
- Highlights the key features and purpose of the project
- Emphasizes the technical skills demonstrated
- Uses professional yet engaging language
- Focuses on impact and functionality
- Is concise but informative

Return ONLY the description text, no additional formatting or explanation.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text || text.trim().length === 0) {
        throw new Error('Received empty response from AI');
      }

      setLoading(false);
      return text.trim();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate description';
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  return {
    generateProjectDescription,
    loading,
    error,
  };
};
