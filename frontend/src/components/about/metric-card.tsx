interface MetricCardProps {
  value: string
  label: string
}

export default function MetricCard({
  value,
  label
}: MetricCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        p-8
        text-center
      "
    >
      <div
        className="
          text-4xl
          font-bold
        "
      >
        {value}
      </div>

      <div
        className="
          mt-3
          text-muted-foreground
        "
      >
        {label}
      </div>
    </div>
  )
}