-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: tribo
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu4

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
-- Table structure for table `boardGame`
--

DROP TABLE IF EXISTS `boardGame`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boardGame` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `publishedAt` date DEFAULT NULL,
  `minPlayers` int NOT NULL DEFAULT '0',
  `maxPlayers` int NOT NULL DEFAULT '0',
  `minPlaytime` int NOT NULL DEFAULT '0',
  `maxPlaytime` int NOT NULL DEFAULT '0',
  `minAge` int NOT NULL DEFAULT '0',
  `description` text,
  `thumbUrl` varchar(256) DEFAULT NULL,
  `imageUrl` varchar(256) DEFAULT NULL,
  `website` varchar(256) DEFAULT NULL,
  `nbRatings` int NOT NULL DEFAULT '0',
  `rating` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardGame`
--

LOCK TABLES `boardGame` WRITE;
/*!40000 ALTER TABLE `boardGame` DISABLE KEYS */;
INSERT INTO `boardGame` VALUES (1,'Scythe','2016-01-01',1,5,90,120,14,'Scythe is a dystopic game about mechas in a commie-sovietic-looking setting',NULL,NULL,NULL,0,0),(2,'Puissance 4',NULL,2,2,1,10,5,'In this game you try to align four tokens of your color on a vertical gri before your opponent does so herself',NULL,NULL,NULL,0,0);
/*!40000 ALTER TABLE `boardGame` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `createdBy`
--

DROP TABLE IF EXISTS `createdBy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `createdBy` (
  `idCreator` int NOT NULL,
  `idContent` int NOT NULL,
  `contentType` varchar(16) NOT NULL,
  `job` varchar(16) NOT NULL,
  PRIMARY KEY (`idCreator`,`idContent`,`contentType`),
  CONSTRAINT `fk_createdBy_1` FOREIGN KEY (`idCreator`) REFERENCES `creator` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `createdBy`
--

LOCK TABLES `createdBy` WRITE;
/*!40000 ALTER TABLE `createdBy` DISABLE KEYS */;
INSERT INTO `createdBy` VALUES (1,1,'boardgame','Designer'),(2,1,'boardgame','Publisher');
/*!40000 ALTER TABLE `createdBy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creator`
--

DROP TABLE IF EXISTS `creator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `thumbUrl` varchar(256) DEFAULT NULL,
  `website` varchar(256) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `label_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creator`
--

LOCK TABLES `creator` WRITE;
/*!40000 ALTER TABLE `creator` DISABLE KEYS */;
INSERT INTO `creator` VALUES (1,'Jamey Stegmaier',NULL,NULL,NULL),(2,'Albi',NULL,NULL,NULL);
/*!40000 ALTER TABLE `creator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `search`
--

DROP TABLE IF EXISTS `search`;
/*!50001 DROP VIEW IF EXISTS `search`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `search` AS SELECT 
 1 AS `haystack`,
 1 AS `displayString`,
 1 AS `thumb`,
 1 AS `type`,
 1 AS `id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL,
  `pseudo` varchar(32) NOT NULL,
  `password` varchar(64) NOT NULL,
  `themeString` varchar(64) NOT NULL DEFAULT 'light,North-Games,Cozy',
  `avatarUrl` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`email`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'loic@spamland.com','Loic','toto','Roleet,Dark,Compact',NULL),(3,'romain@spamland.com','Romain','toto','North-Games,Light,Cozy,Dyslexic,Colorblind',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `search`
--

/*!50001 DROP VIEW IF EXISTS `search`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`loic`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `search` AS select '' AS `haystack`,`user`.`pseudo` AS `displayString`,`user`.`avatarUrl` AS `thumb`,'user' AS `type`,`user`.`id` AS `id` from `user` union select '' AS `haystack`,`boardGame`.`name` AS `displayString`,`boardGame`.`thumbUrl` AS `thumb`,'boardGame' AS `type`,`boardGame`.`id` AS `id` from `boardGame` union select '' AS `haystack`,`creator`.`name` AS `displayString`,`creator`.`thumbUrl` AS `thumb`,'creator' AS `type`,`creator`.`id` AS `id` from `creator` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-24 11:30:40
