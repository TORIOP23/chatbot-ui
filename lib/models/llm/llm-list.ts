import { LLM } from "@/types"
import { GOOGLE_LLM_LIST } from "./google-llm-list"
import { VINA_LLM_LIST } from "./vinaLlama-llm-list"

export const LLM_LIST: LLM[] = [...GOOGLE_LLM_LIST, ...VINA_LLM_LIST]

export const LLM_LIST_MAP: Record<string, LLM[]> = {
  google: GOOGLE_LLM_LIST,
  vilm: VINA_LLM_LIST
}
