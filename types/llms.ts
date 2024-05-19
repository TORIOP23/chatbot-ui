import { ModelProvider } from "."

export type LLMID = GoogleLLMID | VinaLlamaLLMID

// Google Models
export type GoogleLLMID =
  | "gemini-pro" // Gemini Pro
  | "gemini-pro-vision" // Gemini Pro Vision

export type VinaLlamaLLMID = "vinallama-7b-chat" | "vinaLlama-7B-chat-finetuned"

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
