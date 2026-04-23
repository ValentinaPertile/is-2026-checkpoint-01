
# Proyecto IS-2026 - Checkpoint 01

## Descripción
Este proyecto consiste en una implementación desplegada mediante contenedores Docker para garantizar la paridad de entorno entre desarrollo y producción. El sistema incluye una API RESTful (Backend), una interfaz de usuario (Frontend) y una base de datos relacional (Postgres).

## Equipo de Desarrollo
A continuación se detalla la conformación del equipo y las áreas de responsabilidad asignadas:

| Nombre | Legajo | GitHub User | Feature |
| :--- | :--- | :--- | :--- |
| **Pértile de la Vega Valentina** | 33288 | @valentinapertile | Coordinación / Backend |
| **Suárez Pavicich María Luana** | 33210  | @luana-suarez| Database |
| **Romero Olmo Macarena** | 33372 | @macarena-1973 | Frontend / Portainer |

## Tecnologías Utilizadas
* **Backend:** Python 
* **Base de Datos:** PostgreSQL
* **Infraestructura:** Docker & Docker Compose
* **Gestión de Versiones:** Git & GitHub

## Requisitos Previos
Para ejecutar este proyecto, asegúrate de tener instalado:
1. [Docker Desktop](https://www.docker.com/products/docker-desktop/) (o Docker Engine con Compose).
2. [Git](https://git-scm.com/).


## Accesos
* Frontend: http://localhost:8080
* Backend health: http://localhost:5000/api/health
* Backend team: http://localhost:5000/api/team
* Backend info: http://localhost:5000/api/info
* Portainer: http://localhost:9000

---

## Estructura del proyecto

```text
is-2026-checkpoint-01/
├── docker-compose.yml
├── .env.example
├── .gitignore
├── README.md
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── html/
│       ├── index.html
│       └── app.js
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── requirements.txt
│   └── app.py
├── database/
│   └── init.sql
└── portainer/

