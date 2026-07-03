import { PredictionResponse } from "@/types/prediction"

interface PredictionResultProps {
  prediction: PredictionResponse | null
}

export default function PredictionResult({ prediction }: PredictionResultProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        p-8
      "
    >
      <h3
        className="
          text-xl
          font-semibold
        "
      >
        Prediction Result
      </h3>

      <p
        className="
          mt-8
          text-5xl
          font-bold
        "
      >
        {prediction
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: prediction.currency,
            }).format(prediction.predicted_price)
          : "—"}
      </p>

      <p
        className="
          mt-2
          text-muted-foreground
        "
      >
        {prediction
          ? "Prediction Completed"
          : "Waiting for prediction"}
      </p>

      <div className="mt-6 space-y-2">
        <p className="text-sm text-muted-foreground">Model</p>
        <p className="text-base font-medium">
          {prediction?.model ?? "—"}
        </p>
      </div>
    </div>
  )
}