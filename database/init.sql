CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    legajo VARCHAR(20) NOT NULL,
    feature VARCHAR(50) NOT NULL,
    servicio VARCHAR(50) NOT NULL,
    estado VARCHAR(30) NOT NULL
);

INSERT INTO members (nombre, apellido, legajo, feature, servicio, estado)
VALUES
    ('Maria Luana', 'Suarez Pavicich', '33210', 'Feature 04', 'database', 'running'),
    ('Macarena', 'Romero Olmo', '33372', 'Feature 02 y 05', 'frontend y portainer', 'running'),
    ('Valentina', 'Pertile de la Vega', '33288', 'Feature 01 y 03', 'backend y compose/readme', 'running');
