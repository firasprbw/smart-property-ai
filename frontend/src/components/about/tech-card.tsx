import { ReactNode } from "react"

interface TechCardProps {
  icon: ReactNode
  title: string
}

export default function TechCard({
  icon,
  title
}: TechCardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        px-5
        py-3
      "
    >
      {icon}
      <span>{title}</span>
    </div>
  )
}