-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: Champions
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Favourites`
--

DROP TABLE IF EXISTS `Favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Favourites`
(
  `user_id` varchar
(150) NOT NULL,
  `video_id` varchar
(150) NOT NULL,
  `delete_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`user_id`,`video_id`),
  KEY `fk_Favourites_video_id_idx`
(`video_id`),
  CONSTRAINT `fk_Favourites_user_id` FOREIGN KEY
(`user_id`) REFERENCES `user`
(`user_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION,
  CONSTRAINT `fk_Favourites_video_id` FOREIGN KEY
(`video_id`) REFERENCES `videos`
(`video_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Favourites`
--

LOCK TABLES `Favourites` WRITE;
/*!40000 ALTER TABLE `Favourites` DISABLE KEYS */;
/*!40000 ALTER TABLE `Favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appreciations`
--

DROP TABLE IF EXISTS `appreciations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appreciations`
(
  `promise_id` varchar
(150) NOT NULL,
  `user_id` varchar
(150) NOT NULL,
  `technique` int
(1) NOT NULL,
  `velocity` int
(1) NOT NULL,
  `strenght` int
(1) NOT NULL,
  `ball_hit` int
(1) NOT NULL,
  `ball_stop` int
(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `delete_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`promise_id`,`user_id`),
  KEY `fk_appreciations_user_id_idx`
(`user_id`),
  CONSTRAINT `fk_appreciations_user_id` FOREIGN KEY
(`user_id`) REFERENCES `user`
(`user_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appreciations`
--

LOCK TABLES `appreciations` WRITE;
/*!40000 ALTER TABLE `appreciations` DISABLE KEYS */;
/*!40000 ALTER TABLE `appreciations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments`
(
  `comment_id` varchar
(150) NOT NULL,
  `promise_id` varchar
(150) NOT NULL,
  `video_id` varchar
(150) NOT NULL,
`user_id` varchar
(150) NOT NULL,
  `content` varchar
(300) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `delete_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`comment_id`),
  KEY `fk_comments_promise_id_idx`
(`promise_id`),
  KEY `fk_comments_video_id_idx`
(`video_id`),
  CONSTRAINT `fk_comments_promise_id` FOREIGN KEY
(`promise_id`) REFERENCES `promise`
(`promise_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION,
  CONSTRAINT `fk_comments_video_id` FOREIGN KEY
(`video_id`) REFERENCES `videos`
(`video_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages`
(
  `message_id` varchar
(150) NOT NULL,
  `transmitter` varchar
(150) NOT NULL,
  `receiver` varchar
(150) NOT NULL,
  `message_content` varchar
(150) NOT NULL,
  `created_at` varchar
(45) NOT NULL,
  PRIMARY KEY
(`message_id`),
  KEY `fk_messages_tranmistion_idx`
(`transmitter`),
  KEY `fk_messages__receiver_idx`
(`receiver`),
  CONSTRAINT `fk_messages__receiver` FOREIGN KEY
(`receiver`) REFERENCES `user`
(`user_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION,
  CONSTRAINT `fk_messages_tranmistion` FOREIGN KEY
(`transmitter`) REFERENCES `user`
(`user_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promise`
--

DROP TABLE IF EXISTS `promise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `promise`
(
  `promise_id` varchar
(150) NOT NULL,
  `user_id` varchar
(150) NOT NULL,
  `avatar_url` varchar
(120) DEFAULT NULL,
  `name` varchar
(30) NOT NULL,
  `surname1` varchar
(80) NOT NULL,
  `surname2` varchar
(80) DEFAULT NULL,
  `gender` varchar
(8) NOT NULL,
  `comunity` varchar
(30) NOT NULL,
  `province` varchar
(30) NOT NULL,
  `date_birth` date NOT NULL,
  `team` varchar
(80) DEFAULT NULL,
  `height` decimal
(3,2) DEFAULT NULL,
  `weight` decimal
(4,1) DEFAULT NULL,
  `demarcation` varchar
(30) NOT NULL,
  `best_leg` varchar
(15) DEFAULT NULL,
  PRIMARY KEY
(`promise_id`),
  KEY `fk_promise_user_id_idx`
(`user_id`),
  CONSTRAINT `fk_promise_user_id` FOREIGN KEY
(`user_id`) REFERENCES `user`
(`user_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promise`
--

LOCK TABLES `promise` WRITE;
/*!40000 ALTER TABLE `promise` DISABLE KEYS */;
/*!40000 ALTER TABLE `promise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user`
(
  `user_id` varchar
(150) NOT NULL,
  `user_name` varchar
(30) NOT NULL,
  `surname1` varchar
(80) NOT NULL,
  `surname2` varchar
(80) DEFAULT NULL,
  `gender` varchar
(8) NOT NULL,
  `postal_code` varchar
(7) DEFAULT NULL,
  `phone` varchar
(15) NOT NULL,
  `email` varchar
(80) NOT NULL,
  `password` varchar
(255) NOT NULL,
  `user_type` varchar
(9) NOT NULL,
  `payment_method` varchar
(15) DEFAULT NULL,
  `club` varchar
(45) DEFAULT NULL,
  `verification_code` varchar
(65) NOT NULL,
  `created_at` datetime NOT NULL,
  `verified_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`user_id`),
  UNIQUE KEY `email_UNIQUE`
(`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `videos`
(
  `video_id` varchar
(150) NOT NULL,
  `promise_id` varchar
(150) NOT NULL,
  `video_url` varchar
(150) NOT NULL,
  `title` varchar
(80) DEFAULT NULL,
`description` varchar
(300) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY
(`video_id`),
  KEY `fk_videos_promise_id_idx`
(`promise_id`),
  CONSTRAINT `fk_videos_promise_id` FOREIGN KEY
(`promise_id`) REFERENCES `promise`
(`promise_id`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB
DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 19:10:05
