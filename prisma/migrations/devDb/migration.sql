-- CreateTable
CREATE TABLE `requisitos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vaga_id` INTEGER NULL,
    `requisito` VARCHAR(255) NULL,

    INDEX `vaga_id`(`vaga_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vagas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_empresa` VARCHAR(100) NULL,
    `logo` VARCHAR(100) NULL,
    `data_pub` DATE NULL,
    `cargo` VARCHAR(100) NULL,
    `descricao` TEXT NULL,
    `localidade` VARCHAR(100) NULL,
    `tipo` VARCHAR(20) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `requisitos` ADD CONSTRAINT `requisitos_ibfk_1` FOREIGN KEY (`vaga_id`) REFERENCES `vagas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

