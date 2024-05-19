import { IconSparkles } from "@tabler/icons-react"
import { FC, HTMLAttributes } from "react"

interface ModelIconProps extends HTMLAttributes<HTMLDivElement> {
  height: number
  width: number
}

export const ModelIcon: FC<ModelIconProps> = ({ height, width }) => {
  return <IconSparkles size={width} />
}
