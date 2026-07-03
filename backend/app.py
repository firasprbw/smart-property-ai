from fastapi import FastAPI
from schemas import HouseFeatures
from schemas import PredictionResponse
from services.preprocessing import prepare_features
from services.predictor import predict_price
from fastapi.middleware.cors import CORSMiddleware

import joblib
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

model = joblib.load("../models/house_price_model.pkl")

app = FastAPI(
    title="Smart Property AI API",
    description="API untuk memprediksi harga rumah menggunakan Machine Learning",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to Smart Property AI!"
    }

@app.post("/predict", tags=["Prediction"], response_model=PredictionResponse)
def predict(data: HouseFeatures):

    features = prepare_features(data)

    prediction = predict_price(features)

    return PredictionResponse(
    predicted_price=prediction,
    currency="USD",
    model="Random Forest"
)

@app.get("/health", tags=["System"])
def health():
    return {
        "status": "healthy",
        "model_loaded": True
    }

@app.get("/model-info", tags=["Model"])
def get_model_info():

    with open(BASE_DIR / "models" / "metadata.json", "r") as file:
        metadata = json.load(file)

    return metadata

@app.get("/model-info", tags=["Model"])
def model_info():

    with open(BASE_DIR / "models" / "metadata.json") as f:
        metadata = json.load(f)

    return metadata