export type LLMID = VinaLlamaLLMID

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

export type ModelProvider = "vilm"
