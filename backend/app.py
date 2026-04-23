import os
from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)

SERVICE_NAME = os.getenv("SERVICE_NAME", "teamboard-backend")
SERVICE_VERSION = os.getenv("SERVICE_VERSION", "1.0.0")

DB_HOST = os.getenv("DB_HOST", "database")
DB_PORT = int(os.getenv("DB_PORT", "5432"))
DB_USER = os.getenv("POSTGRES_USER", "teamboard_user")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "teamboard_password")
DB_NAME = os.getenv("POSTGRES_DB", "teamboard_db")


def get_connection():
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        dbname=DB_NAME,
    )


@app.get("/api/health")
def health():
    try:
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT 1;")
                cur.fetchone()

        return jsonify(
            {
                "status": "ok",
                "service": SERVICE_NAME,
                "database": "up",
            }
        ), 200

    except Exception as exc:
        return jsonify(
            {
                "status": "error",
                "service": SERVICE_NAME,
                "database": "down",
                "message": str(exc),
            }
        ), 503


@app.get("/api/info")
def info():
    return jsonify(
        {
            "service": SERVICE_NAME,
            "version": SERVICE_VERSION,
            "port": 5000,
            "description": "API REST de TeamBoard",
        }
    ), 200


@app.get("/api/team")
def team():
    try:
        with get_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT
                        nombre,
                        apellido,
                        legajo,
                        feature,
                        servicio,
                        estado
                    FROM members
                    ORDER BY id;
                    """
                )
                members = cur.fetchall()

        return jsonify(members), 200

    except Exception as exc:
        return jsonify(
            {
                "error": "No se pudo obtener la lista del equipo",
                "message": str(exc),
            }
        ), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
