import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function FeatureCard({
  title,
  description,
  icon: Icon
}: FeatureCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
        "
      >
        <Icon
          size={28}
          className="text-blue-600"
        />
      </div>

      <h3
        className="
          mt-6
          text-2xl
          font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          leading-7
          text-muted-foreground
        "
      >
        {description}
      </p>
    </div>
  )
}