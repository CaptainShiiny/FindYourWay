-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 09 Février 2017 à 08:16
-- Version du serveur :  5.7.11
-- Version de PHP :  7.0.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `findyourway`
--

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
(5, 'c\'est une ville dont le nom commence par N', 1, 5);

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
(1, 'Félicitation, vous avez gagné une place VIP pour le concert du chanteur que vous voulez.', 'Nancy', '48.683331', '6.2');

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

--
-- Contenu de la table `game`
--

INSERT INTO `game` (`id`, `score`, `player_id`, `destination_id`, `status`) VALUES
(1, 0, 1, 1, 'créée'),
(2, 0, 2, 1, 'créée'),
(3, 0, 3, 1, 'créée'),
(4, 0, 4, 1, 'créée'),
(5, 0, 5, 1, 'créée'),
(6, 0, 6, 1, 'créée'),
(7, 0, 7, 1, 'créée'),
(8, 0, 8, 1, 'créée'),
(9, 0, 9, 1, 'créée'),
(10, 0, 10, 1, 'créée'),
(11, 0, 11, 1, 'créée'),
(12, 0, 12, 1, 'créée'),
(13, 0, 13, 1, 'créée');

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
(1, '2.365097', '48.726194', 'Orly'),
(2, '5.372178', '43.296363', 'Marseille'),
(3, '6.183241', '48.693760', 'Place Stanislas');

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
-- Contenu de la table `player`
--

INSERT INTO `player` (`id`, `pseudo`, `token`) VALUES
(1, 'Dorian', 'QqqCnF0bBZ93LTCSg93NTN2eRCGAlg0m'),
(2, 'titi', 'vHDTOtIJfWRYsDOKGmbdSaN1EizVLFS/'),
(3, 'Dodo', 'FZ6g9o6P0CLcS+jmoaaKgxPcCJcyOhYO'),
(4, 'Admin', '3Fs3YZwpMMEReluTmhx/75hU2QPzvDK8'),
(5, 'LeBossDu54', 'k0U2xXKdAcigicJsyxiAvLb4fCBXzYtW'),
(6, 'WWest', 'kKBt0wa10MrBkySg55CISN4WRgOvwt6N'),
(7, 'John', 'GM6PafDVGFvZkmUN8ZY4wbeOZnJ5XqH+'),
(8, 'Jesse', 'YRMP3aIBbxf1yLWOl0VaGkUPQp+HKUtr'),
(9, 'Jordan', '4m0sNQcPTDznDR5XdypaWG0BnoGFOLnt'),
(10, 'Michel', '/XHaxH63ArRnnh3QPHlaYyFxiea2TCyZ'),
(11, 'Marc', 'VqYgMAQLoDW2vO+05mNi1vY4tu1Ftcg4'),
(12, 'John DO', 'peFvgqjWa88m8XjiH+AQdbwNtlUgnVFS'),
(13, 'Jacques', 'SUEL/0he0Pqr1cSaiNXpqVoY67PzyQHS');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `final_destination`
--
ALTER TABLE `final_destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
