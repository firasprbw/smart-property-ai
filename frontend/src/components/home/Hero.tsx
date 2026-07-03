import Link from "next/link"

import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Flame,
  GitBranch
} from "lucide-react"

import Section from "../ui/Section"

export default function Hero() {
  return (
    <Section>
      <div
        className="
          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Badge */}

        <div
          className="
            rounded-full
            border
            bg-blue-50
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
          "
        >
          ✨ AI Powered Real Estate Intelligence
        </div>

        {/* Title */}

        <h1
          className="
            mt-8
            max-w-4xl
            text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            md:text-6xl
          "
        >
          AI-Powered

          <br />

          <span
            className="
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            House Price Prediction
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-muted-foreground
          "
        >
          Estimate California house prices using Machine Learning
          powered by a Random Forest Regression model.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          <Link
            href="/prediction"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Predict Now

            <ArrowRight size={18} />
          </Link>

          <Link
            href="https://github.com/firasprbw/smart-property-ai-model"
            target="_blank"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              px-6
              py-3
              font-semibold
              transition
              hover:bg-muted
            "
          >
            <GitBranch size={18} />

            View GitHub
          </Link>
        </div>

        {/* Tech Stack */}

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-8
          "
        >
          <div className="flex items-center gap-2">
            <BrainCircuit
              className="text-blue-600"
              size={20}
            />

            <span>Random Forest</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame
              className="text-blue-600"
              size={20}
            />

            <span>FastAPI</span>
          </div>

          <div className="flex items-center gap-2">
            <Cpu
              className="text-blue-600"
              size={20}
            />

            <span>Next.js</span>
          </div>
        </div>

        {/* Illustration */}
        <div
          className="
            mt-20
            flex
            w-full
            max-w-5xl
            justify-center
          "
        >
          <div
            className="
              flex
              h-72
              w-full
              items-center
              justify-center
              rounded-3xl
              border
              bg-gradient-to-br
              from-blue-50
              to-cyan-50
            "
          >
            <div className="text-center">

              <div className="text-7xl">
                🏠
              </div>

              <div className="mt-4 text-xl font-semibold">
                AI House Prediction
              </div>

              <div className="mt-2 text-muted-foreground">
                Illustration Coming Soon
              </div>

            </div>
          </div>
        </div>

      </div>
    </Section>
  )
}