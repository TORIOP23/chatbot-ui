import { LLM } from "@/types"
import { LLM_LIST_MAP } from "./llm/llm-list"

export const fetchHostedModels = async () => {
  try {
    let modelsToAdd: LLM[] = []
    const models = LLM_LIST_MAP["vilm"]

    if (Array.isArray(models)) {
      modelsToAdd.push(...models)
    }

    return {
      hostedModels: modelsToAdd
    }
  } catch (error) {
    console.warn("Error fetching hosted models: " + error)
  }
}
