import { generateLocalEmbedding } from "@/lib/generate-local-embedding"
import { processDocX } from "@/lib/retrieval/processing"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { Database } from "@/supabase/types"
import { FileItemChunk } from "@/types"
import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"
import OpenAI from "openai"

export async function POST(req: Request) {
  const json = await req.json()
  const { text, fileId, fileExtension } = json as {
    text: string
    fileId: string
    fileExtension: string
  }

  try {
    const supabaseAdmin = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const profile = await getServerProfile()

    let chunks: FileItemChunk[] = []

    switch (fileExtension) {
      case "docx":
        chunks = await processDocX(text)
        break
      default:
        return new NextResponse("Unsupported file type", {
          status: 400
        })
    }

    let embeddings: any = []

    let openai
    // if (profile.use_azure_openai) {
    //   openai = new OpenAI({
    //     apiKey: profile.azure_openai_api_key || "",
    //     baseURL: `${profile.azure_openai_endpoint}/openai/deployments/${profile.azure_openai_embeddings_id}`,
    //     defaultQuery: { "api-version": "2023-12-01-preview" },
    //     defaultHeaders: { "api-key": profile.azure_openai_api_key }
    //   })
    // } else {
    //   openai = new OpenAI({
    //     apiKey: profile.openai_api_key || "",
    //     organization: profile.openai_organization_id
    //   })
    // }

    // const file_items = chunks.map((chunk, index) => ({
    //   file_id: fileId,
    //   user_id: profile.user_id,
    //   content: chunk.content,
    //   tokens: chunk.tokens,
    //   openai_embedding:
    //     embeddingsProvider === "openai"
    //       ? ((embeddings[index] || null) as any)
    //       : null,
    //   local_embedding:
    //     embeddingsProvider === "local"
    //       ? ((embeddings[index] || null) as any)
    //       : null
    // }))

    const file_items = chunks.map((chunk, index) => ({
      file_id: fileId,
      user_id: profile.user_id,
      content: chunk.content,
      tokens: chunk.tokens
      // local_embedding: generateLocalEmbedding(chunk.content)
    })) // TODO: Add OpenAI embeddings

    await supabaseAdmin.from("file_items").upsert(file_items)

    const totalTokens = file_items.reduce((acc, item) => acc + item.tokens, 0)

    await supabaseAdmin
      .from("files")
      .update({ tokens: totalTokens })
      .eq("id", fileId)

    return new NextResponse("Embed Successful", {
      status: 200
    })
  } catch (error: any) {
    console.error(error)
    const errorMessage = error.error?.message || "An unexpected error occurred"
    const errorCode = error.status || 500
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
