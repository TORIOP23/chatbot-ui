"use client"

import Link from "next/link"
import { FC } from "react"
import ChatbotUISVG from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export default function Brand({ theme = "dark" }: BrandProps) {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="/"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="text-4xl font-bold tracking-wide">Chatbot</div>
    </Link>
  )
}
