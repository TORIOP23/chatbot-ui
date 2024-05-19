import { LLM } from "@/types"

const VINALLAMA: LLM = {
  modelId: "vinallama-7b-chat",
  modelName: "Vinallama 7B Chat",
  provider: "vilm",
  hostedId: "vinallama",
  platformLink: "https://ai.google.dev/",
  imageInput: false
}

const VINALLAMA_FT: LLM = {
  modelId: "vinaLlama-7B-chat-finetuned",
  modelName: "Vinallama 7B Chat Finetuned",
  provider: "vilm",
  hostedId: "vinallama-ft",
  platformLink: "https://ai.google.dev/",
  imageInput: false
}

export const VINA_LLM_LIST: LLM[] = [VINALLAMA, VINALLAMA_FT]
