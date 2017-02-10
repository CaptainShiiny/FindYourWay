-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 10 Février 2017 à 15:41
-- Version du serveur :  5.7.17-0ubuntu0.16.04.1
-- Version de PHP :  7.0.13-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `findyourway`
--
CREATE DATABASE IF NOT EXISTS `findyourway` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `findyourway`;

-- --------------------------------------------------------

--
-- Structure de la table `clue`
--

CREATE TABLE `clue` (
  `id` int(11) NOT NULL,
  `label` text NOT NULL,
  `destination_id` int(11) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clue`
--

INSERT INTO `clue` (`id`, `label`, `destination_id`, `position`) VALUES
(1, 'Meurthe et Moselle', 1, 1),
(2, 'Marcel Picot', 1, 2),
(3, 'Célèbre place française', 1, 3),
(4, 'Ville étudiante', 1, 4),
(5, 'c\'est une ville dont le nom commence par N', 1, 5),
(19, 'Lieu de sacre des rois de France', 5, 5),
(15, 'Grand Est', 5, 1),
(16, 'Champagne-Ardennes', 5, 2),
(17, 'Biscuit Rose', 5, 3),
(18, 'Lieu de culte', 5, 4),
(20, 'Grand Est', 6, 1),
(21, 'Alsace', 6, 2),
(22, 'Conseil Régional de l\'Alsace', 6, 3),
(23, 'Aéroport', 6, 4),
(24, 'Sa jumelle se trouve a New York', 6, 5);

-- --------------------------------------------------------

--
-- Structure de la table `final_destination`
--

CREATE TABLE `final_destination` (
  `id` int(11) NOT NULL,
  `label` text NOT NULL,
  `name` varchar(500) NOT NULL,
  `latitude` varchar(250) NOT NULL,
  `longitude` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `final_destination`
--

INSERT INTO `final_destination` (`id`, `label`, `name`, `latitude`, `longitude`) VALUES
(1, 'Félicitation, vous avez gagné une place VIP pour le concert du chanteur que vous voulez.', 'Nancy', '48.683331', '6.2'),
(5, 'Reims', 'Cathédrale de Reims', '49.2538592', '4.03404190'),
(6, 'Colmar', 'Statue de la Liberté', '48.1083586', '7.36363940');

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `player_id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `place`
--

CREATE TABLE `place` (
  `id` int(11) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `label` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `place`
--

INSERT INTO `place` (`id`, `longitude`, `latitude`, `label`) VALUES
(2, '5.372178', '43.296363', 'Marseille'),
(18, '6.0240539', '47.237829', 'Besançon'),
(8, '-4.486076', '48.390394', 'Brest'),
(7, '2.3522219', '48.856614', 'Paris'),
(9, '-0.370678', '49.182863', 'Caen'),
(10, '7.35851200', '48.0793589', 'Colmar'),
(11, '7.3358880', '47.750839', 'Mulhouse'),
(12, '7.752111300', '48.57340529', 'Strasbourg'),
(13, '4.0316960', '49.258329', 'Reims'),
(14, '1.858686', '50.95129', 'Calais'),
(15, '2.2957529', '49.894067', 'Amiens'),
(16, '5.38442310', '49.1598763', 'Verdun'),
(17, '4.07440090', '48.2973451', 'Troyes'),
(19, '-0.5791799', '44.837789', 'Bordeaux'),
(20, '-1.55862600', '43.4831519', 'Biarritz'),
(21, '3.8767159', '43.610769', 'Montpellier'),
(22, '7.26195319', '43.7101728', 'Nice'),
(23, '4.8356589', '45.764043', 'Lyon'),
(24, '2.3987819', '47.081012', 'Bourges'),
(25, '0.199556', '48.00611', 'Le Mans');

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `token` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `clue`
--
ALTER TABLE `clue`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `final_destination`
--
ALTER TABLE `final_destination`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `clue`
--
ALTER TABLE `clue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT pour la table `final_destination`
--
ALTER TABLE `final_destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
