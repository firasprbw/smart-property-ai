import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({
  children,
  className = ""
}: SectionProps) {
  return (
    <section
      className={`
        mx-auto
        max-w-7xl
        px-6
        py-24
        ${className}
      `}
    >
      {children}
    </section>
  )
}