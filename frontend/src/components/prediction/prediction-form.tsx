"use client"

import { useState } from "react"

import {
  Button,
} from "@/components/ui/button"

import {
  Input,
} from "@/components/ui/input"

import { predictHousePrice } from "@/lib/api"
import { PredictionResponse } from "@/types/prediction"

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
  const [form, setForm] = useState({
    longitude: "",
    latitude: "",
    housing_median_age: "",
    total_rooms: "",
    total_bedrooms: "",
    population: "",
    households: "",
    median_income: "",
    ocean_proximity: "INLAND"
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault()

  try {

    setLoading(true)

    const result =
      await predictHousePrice({
        longitude: Number(form.longitude),
        latitude: Number(form.latitude),
        housing_median_age: Number(form.housing_median_age),
        total_rooms: Number(form.total_rooms),
        total_bedrooms: Number(form.total_bedrooms),
        population: Number(form.population),
        households: Number(form.households),
        median_income: Number(form.median_income),
        ocean_proximity: form.ocean_proximity
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
      onSubmit={handleSubmit}
      className="
        space-y-5
      "
    >

      <Input
        name="longitude"
        placeholder="Longitude"
        value={form.longitude}
        onChange={handleChange}
      />

      <Input
        name="latitude"
        placeholder="Latitude"
        value={form.latitude}
        onChange={handleChange}
      />

      <Input
        name="housing_median_age"
        placeholder="Housing Median Age"
        value={form.housing_median_age}
        onChange={handleChange}
      />

      <Input
        name="total_rooms"
        placeholder="Total Rooms"
        value={form.total_rooms}
        onChange={handleChange}
      />

      <Input
        name="total_bedrooms"
        placeholder="Total Bedrooms"
        value={form.total_bedrooms}
        onChange={handleChange}
      />

      <Input
        name="population"
        placeholder="Population"
        value={form.population}
        onChange={handleChange}
      />

      <Input
        name="households"
        placeholder="Households"
        value={form.households}
        onChange={handleChange}
      />

      <Input
        name="median_income"
        placeholder="Median Income"
        value={form.median_income}
        onChange={handleChange}
      />

      <select
        name="ocean_proximity"
        value={form.ocean_proximity}
        onChange={handleChange}
        className="
          h-10
          w-full
          rounded-md
          border
          px-3
        "
      >
        <option>INLAND</option>
        <option>NEAR BAY</option>
        <option>NEAR OCEAN</option>
        <option>&lt;1H OCEAN</option>
        <option>ISLAND</option>
      </select>

      <Button
    className="w-full"
    disabled={loading}
>
    {loading
        ? "Predicting..."
        : "Predict Price"}
</Button>

    </form>
  )
}