DROP TABLE IF EXISTS members;

CREATE TABLE members (
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
    ('Maria Luana', 'Suarez Pavicicho', '33210O', 'Feature 04', 'database', 'running'),
    ('Macarena', 'Romero Olmo ', '33372', 'Feature 02', 'frontend', 'running'),
    ('Valentina', 'Pertila de la Vega', '33288', 'Feature 03', 'backend', 'running'),
    ('Valentina', 'Pertile de la Vega', '33288', 'Feature 01', 'compose/readme', 'running'),
    ('Macarena', 'Romero Olmo', '33372', 'Feature 05', 'portainer', 'running');
