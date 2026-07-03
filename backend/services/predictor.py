from pathlib import Path

import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent.parent

MODEL_PATH = BASE_DIR / "models" / "house_price_model.pkl"
FEATURE_PATH = BASE_DIR / "models" / "feature_columns.pkl"

model = joblib.load(MODEL_PATH)
feature_columns = joblib.load(FEATURE_PATH)


def predict_price(features: dict):

    df = pd.DataFrame([features])

    df = df.reindex(
        columns=feature_columns,
        fill_value=0
    )

    prediction = model.predict(df)

    return float(prediction[0])