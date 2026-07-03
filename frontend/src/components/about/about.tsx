import { ArrowRight } from "lucide-react"

import WorkflowCard from "./workflow-card"
import TechCard from "./tech-card"
import MetricCard from "./metric-card"

import {
  workflow,
  technologies,
  metrics
} from "../../data/features"

export default function About() {
  return (
    <section
      id="about"
      className="
        mx-auto
        flex
        max-w-7xl
        flex-col
        items-center
        px-6
        py-28
      "
    >
      <span
        className="
          rounded-full
          border
          px-4
          py-1
          text-sm
          font-medium
          text-primary
        "
      >
        About
      </span>

      <h2
        className="
          mt-6
          text-center
          text-4xl
          font-bold
        "
      >
        How Smart Property AI Works
      </h2>

      <p
        className="
          mt-6
          max-w-3xl
          text-center
          leading-8
          text-muted-foreground
        "
      >
        Smart Property AI predicts California house prices
        using Machine Learning. The model analyzes property
        characteristics and estimates a market value based on
        patterns learned from thousands of historical housing
        records.
      </p>

      <div
        className="
          mt-20
          grid
          items-center
          gap-8
          md:grid-cols-3
        "
      >
        {workflow.map((item, index) => (
          <div key={item.title}>
            <WorkflowCard
              icon={<item.icon className="h-8 w-8" />}
              title={item.title}
              description={item.description}
            />

            {index !== workflow.length - 1 && (
              <div
                className="
                  hidden
                  justify-center
                  md:flex
                "
              >
                <ArrowRight className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-24 w-full">
        <h3
          className="
            text-center
            text-2xl
            font-semibold
          "
        >
          Built With
        </h3>

        <div
          className="
            mt-8
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >
          {technologies.map((tech) => (
            <TechCard
              key={tech.title}
              icon={<tech.icon />}
              title={tech.title}
            />
          ))}
        </div>
      </div>

      <div
        className="
          mt-24
          grid
          w-full
          max-w-5xl
          gap-6
          md:grid-cols-3
        "
      >
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>
    </section>
  )
}