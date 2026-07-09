CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO usuario (nome, email) VALUES ('Arthur', 'arthur@exemplo.com');
INSERT INTO usuario (nome, email) VALUES ('Maria', 'maria@exemplo.com');

SELECT * FROM usuario;