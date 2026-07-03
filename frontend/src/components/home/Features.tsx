import Section from "../ui/Section"
import FeatureCard from "./FeatureCard"

import { features } from "@/data/features"

export default function Features() {
  return (
    <Section>
      <div className="text-center">

        <span
          className="
            rounded-full
            bg-blue-100
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
          "
        >
          Features
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
          "
        >
          Why Smart Property AI?
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-muted-foreground
          "
        >
          Built with modern AI and web technologies
          to deliver fast, accurate, and reliable
          house price predictions.
        </p>

      </div>

      <div
        className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </Section>
  )
}