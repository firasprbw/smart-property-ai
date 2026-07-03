import { z } from "zod"

export const predictionSchema = z.object({
  longitude: z.coerce
    .number({ message: "Longitude is required" })
    .min(-124, "Longitude must be at least -124")
    .max(-114, "Longitude must be at most -114"),

  latitude: z.coerce
    .number({ message: "Latitude is required" })
    .min(32, "Latitude must be at least 32")
    .max(42, "Latitude must be at most 42"),

  housing_median_age: z.coerce
    .number({ message: "Housing median age is required" })
    .positive("Housing median age must be greater than 0"),

  total_rooms: z.coerce
    .number({ message: "Total rooms is required" })
    .positive("Total rooms must be greater than 0"),

  total_bedrooms: z.coerce
    .number({ message: "Total bedrooms is required" })
    .positive("Total bedrooms must be greater than 0"),

  population: z.coerce
    .number({ message: "Population is required" })
    .positive("Population must be greater than 0"),

  households: z.coerce
    .number({ message: "Households is required" })
    .positive("Households must be greater than 0"),

  median_income: z.coerce
    .number({ message: "Median income is required" })
    .positive("Median income must be greater than 0"),

  ocean_proximity: z.enum([
    "INLAND",
    "NEAR BAY",
    "NEAR OCEAN",
    "<1H OCEAN",
    "ISLAND"
  ], { message: "Ocean proximity is required" })
})

export type PredictionFormData =
  z.infer<typeof predictionSchema>