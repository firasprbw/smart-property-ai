import {
  BrainCircuit,
  Zap,
  ChartColumnIncreasing,
  House,
  Brain,
  Cpu,
  Database,
  TrendingUp
} from "lucide-react"

export const features = [
  {
    title: "Machine Learning",
    description:
      "Powered by a Random Forest Regression model trained on the California Housing Dataset.",
    icon: BrainCircuit
  },
  {
    title: "Fast Prediction",
    description:
      "Get house price predictions instantly through a FastAPI backend with efficient inference.",
    icon: Zap
  },
  {
    title: "Reliable Model",
    description:
      "Achieved an R² Score of 0.82 with strong performance on unseen testing data.",
    icon: ChartColumnIncreasing
  }
]

export const workflow = [
  {
    icon: House,
    title: "Property Data",
    description:
      "Users enter house information such as location, income, rooms, bedrooms and population."
  },
  {
    icon: Brain,
    title: "AI Processing",
    description:
      "A Random Forest model processes every feature and generates an estimated house price."
  }
]

export const technologies = [
  {
    icon: Cpu,
    title: "Random Forest"
  },
  {
    icon: Database,
    title: "FastAPI"
  },
  {
    icon: TrendingUp,
    title: "Next.js"
  },
  {
    icon: Database,
    title: "Scikit-learn"
  },
  {
    icon: Database,
    title: "Tailwind CSS"
  }
]

export const metrics = [
  {
    value: "0.824",
    label: "R² Score"
  },
  {
    value: "$31.9K",
    label: "MAE"
  },
  {
    value: "$48.0K",
    label: "RMSE"
  }
]