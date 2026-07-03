import { ReactNode } from "react"

interface WorkflowCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function WorkflowCard({
  icon,
  title,
  description
}: WorkflowCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        p-8
        text-center
      "
    >
      <div className="flex justify-center">
        {icon}
      </div>

      <h4
        className="
          mt-4
          text-xl
          font-semibold
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>
    </div>
  )
}