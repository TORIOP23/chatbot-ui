import { ModelProvider } from "@/types"
import { IconSparkles } from "@tabler/icons-react"
import { FC, HTMLAttributes } from "react"

interface ModelIconProps extends HTMLAttributes<HTMLDivElement> {
  provider: ModelProvider
  height: number
  width: number
}

export const ModelIcon: FC<ModelIconProps> = ({ provider, height, width }) => {
  return <IconSparkles size={width} />
}
