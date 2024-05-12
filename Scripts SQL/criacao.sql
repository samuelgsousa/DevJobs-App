CREATE DATABASE vagas_dev;

USE vagas_dev;

CREATE TABLE vagas(
id INT AUTO_INCREMENT PRIMARY KEY,
nome_empresa VARCHAR(100),
logo VARCHAR(100),
data_pub DATE,
cargo VARCHAR(100),
descricao TEXT,
localidade VARCHAR(100)
);

CREATE TABLE requisitos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    vaga_id INT,
    requisito VARCHAR(255),
    FOREIGN KEY (vaga_id) REFERENCES vagas(id)
);

INSERT INTO vagas(nome_empresa, cargo, descricao, localidade)
VALUES ('Empresa ABC',  'Desenvolvedor Full Stack', 'Descrição da vaga aqui...', 'São Paulo');

INSERT INTO requisitos (vaga_id, requisito)
VALUES (1, 'Ensino Superior Completo');

INSERT INTO requisitos (vaga_id, requisito)
VALUES (1, 'Inglês Fluente');

INSERT INTO requisitos (vaga_id, requisito)
VALUES (1, 'Conhecimento em JavaScript');

SELECT * FROM vagas;

SELECT * FROM requisitos;

SELECT 	v.*, r.requisito
FROM vagas v
INNER JOIN requisitos r ON v.id = r.vaga_id;

SHOW VARIABLES