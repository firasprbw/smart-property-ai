from schemas import HouseFeatures


def prepare_features(data: HouseFeatures):

    bedroom_ratio = data.total_bedrooms / data.total_rooms
    household_rooms = data.total_rooms / data.households

    row = {
        "longitude": data.longitude,
        "latitude": data.latitude,
        "housing_median_age": data.housing_median_age,
        "total_rooms": data.total_rooms,
        "total_bedrooms": data.total_bedrooms,
        "population": data.population,
        "households": data.households,
        "median_income": data.median_income,

        "<1H OCEAN": 0,
        "INLAND": 0,
        "ISLAND": 0,
        "NEAR BAY": 0,
        "NEAR OCEAN": 0,

        "bedroom_ratio": bedroom_ratio,
        "household_rooms": household_rooms
    }

    row[data.ocean_proximity] = 1

    return row