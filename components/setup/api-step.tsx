import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC } from "react"

interface APIStepProps {
  googleGeminiAPIKey: string
  onGoogleGeminiAPIKeyChange: (value: string) => void
}

export const APIStep: FC<APIStepProps> = ({
  googleGeminiAPIKey,
  onGoogleGeminiAPIKeyChange
}) => {
  return (
    <div className="space-y-1">
      <Label>Google Gemini API Key</Label>

      <Input
        placeholder="Google Gemini API Key"
        type="password"
        value={googleGeminiAPIKey}
        onChange={e => onGoogleGeminiAPIKeyChange(e.target.value)}
      />
    </div>
  )
}
