import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getConciergeRecommendation = async (userInput: string): Promise<RecommendationResponse> => {
  try {
    const model = "gemini-3-flash-preview";
    
    const systemInstruction = `
      You are the Head Concierge at "Lumina Auto Spa", an ultra-luxury car detailing service.
      Your tone is sophisticated, professional, knowledgeable, and polite. 
      You are speaking to a high-net-worth individual about their vehicle.
      
      Based on the user's input (which describes their car and/or problem), recommend one of our packages:
      1. "The Maintenance" (Basic upkeep)
      2. "The Signature" (Enhancement & Protection)
      3. "The Restoration" (Full correction & perfection)
      
      Output ONLY structured JSON.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userInput,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            packageName: { type: Type.STRING, description: "Name of the package" },
            estimatedPrice: { type: Type.STRING, description: "Price range estimation" },
            reasoning: { type: Type.STRING, description: "Sophisticated explanation of why this is needed" },
            estimatedDuration: { type: Type.STRING, description: "Time estimate" },
          },
          required: ["packageName", "estimatedPrice", "reasoning", "estimatedDuration"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as RecommendationResponse;
    }
    
    throw new Error("No response text");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};