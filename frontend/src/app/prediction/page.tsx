"use client"

import { useState } from "react"

import PredictionForm from "@/components/prediction/prediction-form"
import PredictionResult from "@/components/prediction/prediction-result"

import { PredictionResponse } from "@/types/prediction"

export default function PredictionPage() {

  const [prediction, setPrediction] =
    useState<PredictionResponse | null>(null)

  const [loading, setLoading] =
    useState(false)

  return (
    <main
      className="
        mx-auto
        max-w-7xl
        px-6
        py-20
      "
    >
      <div className="mb-12">

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          House Price Prediction
        </h1>

        <p
          className="
            mt-3
            text-muted-foreground
          "
        >
          Enter property information to estimate its value.
        </p>

      </div>

      <div
        className="
          grid
          gap-10
          lg:grid-cols-2
        "
      >
        <PredictionForm
          setPrediction={setPrediction}
          loading={loading}
          setLoading={setLoading}
        />

        <PredictionResult
          prediction={prediction}
        />
      </div>

    </main>
  )
}