-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: vagas_dev
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `requisitos`
--

DROP TABLE IF EXISTS `requisitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requisitos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vaga_id` int DEFAULT NULL,
  `requisito` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vaga_id` (`vaga_id`),
  CONSTRAINT `requisitos_ibfk_1` FOREIGN KEY (`vaga_id`) REFERENCES `vagas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requisitos`
--

LOCK TABLES `requisitos` WRITE;
/*!40000 ALTER TABLE `requisitos` DISABLE KEYS */;
INSERT INTO `requisitos` VALUES (2,1,'Ensino Superior Completo'),(3,1,'Inglês Fluente'),(4,1,'Conhecimento em JavaScript'),(5,1,'Experiência com HTML, CSS e JavaScript'),(6,1,'Conhecimento em frameworks de frontend'),(7,2,'Experiência com Node.js e Express'),(8,2,'Conhecimento em bancos de dados relacionais'),(9,3,'Experiência com linguagens de programação como Java ou C#'),(10,3,'Conhecimento em arquitetura de software'),(11,4,'Experiência com desenvolvimento full stack'),(12,4,'Conhecimento em frameworks de backend'),(13,5,'Experiência em testes de software'),(14,5,'Conhecimento em metodologias ágeis'),(15,6,'Experiência em design de software'),(16,6,'Conhecimento em padrões de projeto'),(17,7,'Experiência com desenvolvimento mobile'),(18,7,'Conhecimento em linguagens como Swift ou Kotlin'),(19,8,'Experiência em processamento de grandes volumes de dados'),(20,8,'Conhecimento em ferramentas de Big Data'),(21,9,'Experiência em segurança da informação'),(22,9,'Certificações em segurança da informação são um diferencial'),(23,10,'Experiência como facilitador de processos ágeis'),(24,10,'Certificação Scrum Master'),(25,11,'Experiência em desenvolvimento de jogos'),(26,11,'Conhecimento em engines de jogos'),(27,12,'Experiência em redes de computadores'),(28,12,'Certificações de redes são um diferencial'),(29,13,'Experiência em análise de dados'),(30,13,'Conhecimento em ferramentas de BI'),(31,14,'Experiência em design de interfaces de usuário'),(32,14,'Conhecimento em ferramentas de prototipagem'),(33,15,'Experiência em sistemas embarcados'),(34,15,'Conhecimento em eletrônica embarcada');
/*!40000 ALTER TABLE `requisitos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-13 19:30:16
