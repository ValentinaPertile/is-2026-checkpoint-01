FROM python:3.12-slim

WORKDIR /app

# Copia solo la carpeta html al contenedor
COPY html/ ./html/

EXPOSE 8080

# El comando corregido: le decimos explícitamente que sirva la carpeta 'html'
CMD ["python3", "-m", "http.server", "8080", "--directory", "html"]
