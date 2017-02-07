-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 07 Février 2017 à 08:12
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
(1, 'hsdvjxvnolredkfp', 2, 7),
(2, 'hsdvjxvnolredkfp', 2, 5);

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
(1, 'Nancy: une magnifique ville !!', 'Nancy', '48.694138', '6.183393'),
(2, 'Nancy: une magnifique ville !!', 'Nancy', '48.694138', '6.183393');

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
(2, 0, 3, 2, 'créée'),
(4, 0, 4, 2, 'créée');

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
(3, '6.183393', '48.694138', 'Place Stanislas');

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
(2, ' fdjixbcortg', '0'),
(3, ' fdjixbcortg', 'gSuKiF6dKHnBCAALyn1rGqs1pqfgqg0d'),
(4, 'milad', 'xDoBlbvnC+8vBiAwL4z2T1YcI3Dw/jqG');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `final_destination`
--
ALTER TABLE `final_destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
