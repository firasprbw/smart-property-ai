"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Button,
} from "@/components/ui/button"

import FormField from "./form-field"

import { predictHousePrice } from "@/lib/api"
import { PredictionResponse } from "@/types/prediction"
import {
  predictionSchema,
  PredictionFormData,
} from "@/lib/validation/prediction"

interface PredictionFormProps {
  setPrediction: React.Dispatch<React.SetStateAction<PredictionResponse | null>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PredictionForm({
  setPrediction,
  loading,
  setLoading,
}: PredictionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionFormData>({
    resolver: zodResolver(predictionSchema) as any,
    defaultValues: {
      ocean_proximity: "INLAND",
    },
  })

  const onSubmit: SubmitHandler<PredictionFormData> = async (data) => {
    try {
      setLoading(true)

      const result = await predictHousePrice({
        longitude: data.longitude,
        latitude: data.latitude,
        housing_median_age: data.housing_median_age,
        total_rooms: data.total_rooms,
        total_bedrooms: data.total_bedrooms,
        population: data.population,
        households: data.households,
        median_income: data.median_income,
        ocean_proximity: data.ocean_proximity,
      })

      setPrediction(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        mx-auto
        max-w-4xl
        space-y-8
        rounded-2xl
        border
        border-white/10
        bg-white/5
        dark:bg-black/10
        p-6
        backdrop-blur-md
        shadow-xl
      "
    >
      {/* Form Header / Optional Section Title */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight bg-gradient-to-r
              from-blue-600
              to-cyan-500
              bg-clip-text
              text-transparent">Property Features</h2>
        <p className="text-sm text-muted-foreground">Input the property details below to predict the median price.</p>
      </div>

      {/* Inputs Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Longitude"
          type="number"
          step="any"
          placeholder="e.g., -122.23"
          registration={register("longitude")}
          error={errors.longitude}
          description="The property's longitude coordinate."
        />

        <FormField
          label="Latitude"
          type="number"
          step="any"
          placeholder="e.g., 37.88"
          registration={register("latitude")}
          error={errors.latitude}
          description="The property's latitude coordinate."
        />

        <FormField
          label="Housing Median Age"
          type="number"
          placeholder="e.g., 41"
          registration={register("housing_median_age")}
          error={errors.housing_median_age}
          description="The median age of the houses in the area."
        />

        <FormField
          label="Total Rooms"
          type="number"
          placeholder="e.g., 880"
          registration={register("total_rooms")}
          error={errors.total_rooms}
          description="The total number of rooms in the property."
        />

        <FormField
          label="Total Bedrooms"
          type="number"
          placeholder="e.g., 129"
          registration={register("total_bedrooms")}
          error={errors.total_bedrooms}
          description="The total number of bedrooms in the property."
        />

        <FormField
          label="Population"
          type="number"
          placeholder="e.g., 322"
          registration={register("population")}
          error={errors.population}
          description="The total population in the area."
        />

        <FormField
          label="Households"
          type="number"
          placeholder="e.g., 126"
          registration={register("households")}
          error={errors.households}
          description="The total number of households in the area."
        />

        <FormField
          label="Median Income"
          type="number"
          placeholder="e.g., 8.32"
          registration={register("median_income")}
          error={errors.median_income}
          description="The median income of the area (in tens of thousands)."
        />
      </div>

      {/* Ocean Proximity Dropdown */}
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Ocean Proximity
        </label>
        <select
          {...register("ocean_proximity")}
          className="
            flex
            h-10
            w-full
            rounded-md
            border
            border-input
            bg-background/50
            px-3
            py-2
            text-sm
            ring-offset-background
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            disabled:cursor-not-allowed
            disabled:opacity-50
            transition-all
          "
        >
          <option value="INLAND">INLAND</option>
          <option value="NEAR BAY">NEAR BAY</option>
          <option value="NEAR OCEAN">NEAR OCEAN</option>
          <option value="<1H OCEAN">&lt;1H OCEAN</option>
          <option value="ISLAND">ISLAND</option>
        </select>
        <p className="text-[0.8rem] text-muted-foreground">Location type relative to the ocean.</p>

        {errors.ocean_proximity && (
          <p className="text-sm font-medium text-destructive">
            {errors.ocean_proximity.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="
          w-full 
          h-11 
          text-base 
          font-semibold 
          shadow-lg 
          bg-blue-600
          hover:bg-blue-700
          transition-all
        "
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Predicting Price...
          </div>
        ) : (
          "Predict Price"
        )}
      </Button>
    </form>
  )
}