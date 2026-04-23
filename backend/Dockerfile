# Usar imagen slim según requerimientos [cite: 133, 150]
FROM python:3.12-slim

# Crear usuario no-root para seguridad 
RUN useradd -m myuser
USER myuser

WORKDIR /app

# Copiar requirements primero para aprovechar el caché de capas 
COPY --chown=myuser:myuser requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente
COPY --chown=myuser:myuser app.py .

# Exponer el puerto 5000 [cite: 137]
EXPOSE 5000

# Comando de ejecución (usando Gunicorn como sugiere el PDF) [cite: 137]
CMD ["python", "-m", "gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
