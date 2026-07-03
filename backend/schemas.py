from pydantic import BaseModel, Field
from typing import Literal


class HouseFeatures(BaseModel):

    longitude: float = Field(
        ge=-124.5,
        le=-114.0,
        description="Longitude of the property"
    )

    latitude: float = Field(
        ge=32,
        le=43,
        description="Latitude of the property"
    )

    housing_median_age: int = Field(
        ge=1,
        le=100,
        description="Median age of houses"
    )

    total_rooms: int = Field(
        gt=0,
        description="Total number of rooms"
    )

    total_bedrooms: int = Field(
        gt=0,
        description="Total number of bedrooms"
    )

    population: int = Field(
        gt=0,
        description="Population living in the block"
    )

    households: int = Field(
        gt=0,
        description="Number of households"
    )

    median_income: float = Field(
        gt=0,
        le=20,
        description="Median income (tens of thousands USD)"
    )

    ocean_proximity: Literal[
        "<1H OCEAN",
        "INLAND",
        "ISLAND",
        "NEAR BAY",
        "NEAR OCEAN"
    ]

class PredictionResponse(BaseModel):
    predicted_price: float
    currency: str
    model: str