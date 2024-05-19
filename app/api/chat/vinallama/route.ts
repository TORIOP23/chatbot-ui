import { ChatSettings } from "@/types"

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages, customModelId } = json as {
    chatSettings: ChatSettings
    messages: any
    customModelId: string
  }

  console.log(chatSettings, messages, customModelId)

  const url = "https://163b-34-145-88-76.ngrok-free.app/chat"
  const body = {
    messages: messages
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  console.log("From route", response)

  return new Response("readableStream", {
    headers: { "Content-Type": "text/plain" }
  })
}
