import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        Chào mừng bạn tới Chatbot UI
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>Chọn 'Tiếp theo' để bắt đầu trò chuyện.</div>
    </div>
  )
}
