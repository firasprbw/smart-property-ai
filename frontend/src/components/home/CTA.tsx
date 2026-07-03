import Link from "next/link"

import Section from "../ui/Section"

export default function CTA() {
  return (
    <section
      className="
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
      "
    >
      <Section>
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            Ready to predict your property value?
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              text-blue-100
            "
          >
            Start estimating California house prices
            using our AI-powered Random Forest model.
          </p>

          <Link
            href="/prediction"
            className="
              mt-10
              rounded-xl
              bg-white
              px-8
              py-4
              font-semibold
              text-blue-600
              transition
              hover:bg-gray-100
            "
          >
            Start Prediction
          </Link>
        </div>
      </Section>
    </section>
  )
}