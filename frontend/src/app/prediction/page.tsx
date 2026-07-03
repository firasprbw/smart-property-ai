"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react" // Pastikan kamu menginstal lucide-react atau sesuaikan dengan ikonmu

import PredictionForm from "@/components/prediction/prediction-form"
import PredictionResult from "@/components/prediction/prediction-result"

import { PredictionResponse } from "@/types/prediction"
import Navbar from "@/components/layout/Navbar"

export default function PredictionPage() {
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Navbar />
      <main
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        <div className="mb-8">
          {/* Tombol Back ke Home */}
          <Link
            href="/"
            className="
              group
              mb-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-muted-foreground
              hover:text-blue-600
              transition-colors
            "
          >
            <ArrowLeft 
              className="
                h-4 
                w-4 
                transition-transform 
                group-hover:-translate-x-1
              " 
            />
            Back to Home
          </Link>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              bg-clip-text
              text-transparent
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

          <PredictionResult prediction={prediction} />
        </div>
      </main>
    </>
  )
}