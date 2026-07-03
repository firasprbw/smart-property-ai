import { PredictionResponse } from "@/types/prediction"

interface PredictionResultProps {
  prediction: PredictionResponse | null
}

export default function PredictionResult({ prediction }: PredictionResultProps) {
  const isReady = !!prediction

  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        p-8
        transition-all
        duration-500
        ${
          isReady
            ? "border-primary/30 bg-primary/[0.02] shadow-[0_12px_40px_rgba(0,0,0,0.15)] shadow-primary/5"
            : "border-white/10 bg-white/5 dark:bg-black/10 backdrop-blur-md shadow-xl"
        }
      `}
    >
      {/* Efek kilauan dekoratif (Glow Orb) di background jika sukses */}
      {isReady && (
        <div className="absolute -right-20 -top-20 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight bg-gradient-to-r
              from-blue-600
              to-cyan-500
              bg-clip-text
              text-transparent">
          Prediction Result
        </h3>
        
        {/* Status Badge */}
        <span
          className={`
            inline-flex
            items-center
            rounded-full
            px-2.5
            py-1
            text-xs
            font-medium
            transition-all
            ${
              isReady
                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                : "bg-muted text-muted-foreground"
            }
          `}
        >
          {isReady ? (
            <>
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Completed
            </>
          ) : (
            "Idle"
          )}
        </span>
      </div>

      {/* Angka / Output Utama */}
      <div className="mt-8 space-y-1">
        <p className="text-sm font-medium text-muted-foreground">
          Estimated Value
        </p>
        <p
          className={`
            text-4xl
            sm:text-5xl
            font-extrabold
            tracking-tight
            transition-all
            ${
              isReady
                ? "bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent"
                : "text-muted-foreground/30"
            }
          `}
        >
          {isReady
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: prediction.currency,
                maximumFractionDigits: 0, // Opsional: bulatkan harga biar rapi
              }).format(prediction.predicted_price)
            : "$ —"}
        </p>
      </div>

      <hr className="my-6 border-white/10 dark:border-white/5" />

      {/* Detail Informasi Model */}
      <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-white/5">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            AI Engine Model
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground/80">
            {prediction?.model ?? "No model active"}
          </p>
        </div>
        
        {/* Ikon dekorasi kecil penanda AI */}
        <div className="h-8 w-8 rounded-lg bg-background/50 flex items-center justify-center text-muted-foreground/70 text-sm">
          🤖
        </div>
      </div>
    </div>
  )
}