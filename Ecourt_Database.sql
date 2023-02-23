-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ecourt_database
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ecourt_judge_registration`
--

DROP TABLE IF EXISTS `ecourt_judge_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ecourt_judge_registration` (
  `Name` varchar(50) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Phone_Number` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Aadhar_Card_Number` varchar(20) NOT NULL,
  `Judge_ID` varchar(20) NOT NULL,
  `Judge_Degination` varchar(20) NOT NULL,
  `Identification_Marks` varchar(100) NOT NULL,
  `Allocated_Court` varchar(50) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Profile_Photo` longblob NOT NULL,
  `Signature_Photo` longblob NOT NULL,
  `aadhar_card_front_photo` longblob NOT NULL,
  `aadhar_card_back_photo` longblob NOT NULL,
  `bar_council_registration_photo` longblob NOT NULL,
  `law_degree_llb_photo` longblob NOT NULL,
  `law_degree_llm_photo` longblob,
  `law_exam_paper_result_photo` longblob NOT NULL,
  `Verify_Phone_No` varchar(6) NOT NULL,
  `Verify_Email_ID` varchar(6) NOT NULL,
  `Create_User_ID` varchar(20) NOT NULL,
  `Create_Password` varchar(20) NOT NULL,
  PRIMARY KEY (`Judge_ID`),
  UNIQUE KEY `Create_User_ID` (`Create_User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ecourt_judge_registration`
--

LOCK TABLES `ecourt_judge_registration` WRITE;
/*!40000 ALTER TABLE `ecourt_judge_registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecourt_judge_registration` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-23 19:42:33
