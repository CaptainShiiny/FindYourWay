-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 09 Février 2017 à 15:14
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
-- Structure de la table `clue_game`
--

CREATE TABLE `clue_game` (
  `id` int(11) NOT NULL,
  `clue_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clue_game`
--

INSERT INTO `clue_game` (`id`, `clue_id`, `game_id`, `status`) VALUES
(1, 1, 77, 1),
(2, 2, 77, 0),
(3, 3, 77, 0),
(4, 4, 77, 0),
(5, 5, 77, 0),
(6, 1, 78, 0),
(7, 2, 78, 0),
(8, 3, 78, 0),
(9, 4, 78, 0),
(10, 5, 78, 0),
(11, 1, 79, 0),
(12, 2, 79, 0),
(13, 3, 79, 0),
(72, 4, 79, 1),
(15, 5, 79, 0),
(16, 1, 80, 0),
(17, 2, 80, 0),
(18, 3, 80, 0),
(19, 4, 80, 0),
(20, 5, 80, 0),
(21, 1, 81, 0),
(22, 2, 81, 0),
(23, 3, 81, 0),
(24, 4, 81, 0),
(25, 5, 81, 0),
(27, 1, 82, 0),
(28, 2, 82, 0),
(29, 3, 82, 0),
(30, 4, 82, 0),
(31, 5, 82, 0),
(32, 1, 83, 0),
(33, 2, 83, 0),
(34, 3, 83, 0),
(35, 4, 83, 0),
(36, 5, 83, 0),
(37, 1, 84, 0),
(38, 2, 84, 0),
(39, 3, 84, 0),
(40, 4, 84, 0),
(41, 5, 84, 0),
(42, 1, 85, 0),
(43, 2, 85, 0),
(44, 3, 85, 0),
(45, 4, 85, 0),
(46, 5, 85, 0),
(47, 1, 86, 0),
(48, 2, 86, 0),
(49, 3, 86, 0),
(50, 4, 86, 0),
(51, 5, 86, 0),
(52, 1, 87, 0),
(53, 2, 87, 0),
(54, 3, 87, 0),
(55, 4, 87, 0),
(56, 5, 87, 0),
(57, 1, 88, 0),
(58, 2, 88, 0),
(59, 3, 88, 0),
(60, 4, 88, 0),
(61, 5, 88, 0),
(62, 1, 89, 0),
(63, 2, 89, 0),
(64, 3, 89, 0),
(65, 4, 89, 0),
(66, 5, 89, 0),
(67, 1, 90, 0),
(68, 2, 90, 0),
(69, 3, 90, 0),
(70, 4, 90, 0),
(71, 5, 90, 0),
(73, 1, 91, 0),
(74, 2, 91, 0),
(75, 3, 91, 0),
(76, 4, 91, 0),
(77, 5, 91, 0),
(78, 1, 92, 0),
(83, 2, 92, 1),
(80, 3, 92, 0),
(81, 4, 92, 0),
(82, 5, 92, 0),
(89, 1, 93, 1),
(85, 2, 93, 0),
(86, 3, 93, 0),
(87, 4, 93, 0),
(88, 5, 93, 0),
(95, 1, 94, 1),
(91, 2, 94, 0),
(92, 3, 94, 0),
(93, 4, 94, 0),
(94, 5, 94, 0),
(101, 1, 95, 1),
(97, 2, 95, 0),
(98, 3, 95, 0),
(99, 4, 95, 0),
(100, 5, 95, 0);

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
(13, 0, 13, 1, 'créée'),
(14, 0, 14, 1, 'créée'),
(15, 0, 15, 1, 'créée'),
(16, 0, 16, 1, 'créée'),
(17, 0, 17, 1, 'créée'),
(18, 0, 18, 1, 'créée'),
(19, 0, 19, 1, 'créée'),
(20, 0, 20, 1, 'créée'),
(21, 0, 21, 1, 'créée'),
(22, 0, 22, 1, 'créée'),
(23, 0, 23, 1, 'créée'),
(24, 0, 24, 1, 'créée'),
(25, 0, 25, 1, 'créée'),
(26, 4, 26, 1, 'créée'),
(27, 0, 27, 1, 'créée'),
(28, 0, 28, 1, 'créée'),
(29, 0, 29, 1, 'créée'),
(30, 0, 30, 1, 'créée'),
(31, 0, 31, 1, 'créée'),
(32, 0, 32, 1, 'créée'),
(33, 0, 33, 1, 'créée'),
(34, 0, 34, 1, 'créée'),
(35, 0, 35, 1, 'créée'),
(36, 0, 36, 1, 'créée'),
(37, 0, 37, 1, 'créée'),
(38, 0, 38, 1, 'créée'),
(39, 0, 39, 1, 'créée'),
(40, 0, 40, 1, 'créée'),
(41, 0, 41, 1, 'créée'),
(42, 0, 42, 1, 'créée'),
(43, 0, 43, 1, 'créée'),
(44, 0, 44, 1, 'créée'),
(45, 0, 45, 1, 'créée'),
(46, 0, 46, 1, 'créée'),
(47, 0, 47, 1, 'créée'),
(48, 0, 48, 1, 'créée'),
(49, 0, 49, 1, 'créée'),
(50, 0, 50, 1, 'créée'),
(51, 0, 51, 1, 'créée'),
(52, 0, 52, 1, 'créée'),
(53, 0, 53, 1, 'créée'),
(54, 0, 54, 1, 'créée'),
(55, 0, 55, 1, 'créée'),
(56, 0, 56, 1, 'créée'),
(57, 0, 57, 1, 'créée'),
(58, 0, 58, 1, 'créée'),
(59, 8, 59, 1, 'créée'),
(60, 8, 60, 1, 'créée'),
(61, 22, 61, 1, 'créée'),
(62, 0, 62, 1, 'créée'),
(63, 10, 62, 2, 'créée'),
(64, 8, 62, 2, 'créée'),
(65, 0, 62, 2, 'créée'),
(66, 0, 62, 2, 'créée'),
(67, 8, 62, 2, 'créée'),
(68, 2, 62, 2, 'créée'),
(69, 10, 62, 2, 'créée'),
(70, 10, 62, 1, 'créée'),
(71, 0, 62, 1, 'créée'),
(72, 0, 62, 1, 'créée'),
(73, 8, 62, 1, 'créée'),
(74, 10, 62, 1, 'créée'),
(75, 10, 62, 1, 'créée'),
(76, 6, 62, 1, 'créée'),
(77, 10, 62, 1, 'créée'),
(78, 8, 63, 1, 'créée'),
(79, 8, 64, 1, 'créée'),
(80, 8, 65, 1, 'créée'),
(81, 0, 66, 1, 'créée'),
(82, 0, 67, 1, 'créée'),
(83, 0, 68, 1, 'créée'),
(84, 0, 69, 1, 'créée'),
(85, 0, 70, 1, 'créée'),
(86, 0, 71, 1, 'créée'),
(87, 0, 72, 1, 'créée'),
(88, 0, 73, 1, 'créée'),
(89, 0, 74, 1, 'créée'),
(90, 0, 75, 1, 'créée'),
(91, 0, 76, 1, 'créée'),
(92, 0, 77, 1, 'créée'),
(93, 0, 78, 1, 'créée'),
(94, 0, 79, 1, 'créée'),
(95, 0, 80, 1, 'créée');

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
(13, 'Jacques', 'SUEL/0he0Pqr1cSaiNXpqVoY67PzyQHS'),
(14, 'Philibert', 'mF71PtxXTUNUoXK+Jd6jyySej17N2Kbi'),
(15, 'Hubert', '7h3TTiLPg2jOXz1fcbudFxy4yLNsEadP'),
(16, 'Gigi', 'B5E6JwjPHGCvWuOp3FxvEE+JhTOhUxgJ'),
(17, 'Sam', 'Z4dWebp9asNSo2KrCWfsE0+ymIvFTOpw'),
(18, 'Donna', 'b7Zkd1AUXX4ZzbvcvpkUqKZp7h6Ejacu'),
(19, 'Franck', 'n7m8yXMsCBlRUUO8Rk6HwVW8VfQPbjSI'),
(20, 'Yonis', 'LnF9t3Zm7MfH9U0mJ6MTsMMN+6WVlHm+'),
(21, 'Cris', '17KEW4tqQk3MOpgoi2T4QsVRKzH1g7uv'),
(22, 'Dany', 'ahFrs2mQ6wkzJ0Cp010SaScD8lmxMiyt'),
(23, 'Marianne', '9fMMHFTVAeRwDA5h9/hYGcHZDa1OgAet'),
(24, 'James', '9JU5P7zIwjFFaUWVcNsZquL/CFOX1mWQ'),
(25, 'Gilles', 'HmEqDFqDe2fGnmuh80RfJ5zMpYwddsgT'),
(26, 'Joachim', 'wqSBi7zcfzJOLP5qmr7YZvLH8OrLpxh/'),
(27, 'Lloris', 'Ct88TCjqZ8jq0mkjTZHdo3XsA/SoCRe1'),
(28, 'Michael', 'ZhqW9h+DfRVODooR/9poZAZcJtGmOK5y'),
(29, 'Stephen', '2TJXTpH3x9EDhJuk97D5WGAy2GqkKya6'),
(30, 'Lise', 'JRF5IsMm9c32dH7yhQb7ncEJtv4Rp5TA'),
(31, 'Maurice', 'U8ZNfK6zSsoNSSV7TZ/YQG/a45tJqFUu'),
(32, 'Gale', 't4zEz91dGhpgmMLI+381LGiGCedMDRKn'),
(33, 'Rosa', 'Ka1i0lpfJn/LsReipbjAdlTfoF67bhC3'),
(34, 'Will', '0u2MMB9ichDxrzzl30PogtjYYzc9Fk/Z'),
(35, 'Zod', 'vsQb8wTJx2cp7z/RVsWF39ZVqs+TyxA+'),
(36, 'Yakari', 'tHXWKPFZFQBE94X8iCZyT7MbRQYZH1oW'),
(37, 'Tom', '/vEfRzAkw6BCxk/VqlQyzRi3RSnMWS44'),
(38, 'Martin', 'k5ziZKC4Og5z0U/VADSss06kGdmGuUf3'),
(39, 'Samir', 'yB5B5X/XBjI1/u0q75/Gzc9Z1zTK0fk4'),
(40, 'Johnson', 'GJ37UghJAk760JiVAVh2NQN0ITanO53x'),
(41, 'Sherlock', 'SNZmouZkeX5geipmlY7coMr+hoQYCIp1'),
(42, 'Gaetan', '9Lh9jrFzy4YH5iv3OUbfnB3AsHLkz4MC'),
(43, 'Jamy', '7xnlEU2KyZWfHqzO4SWj/J7hcFe7EhQw'),
(44, 'Dog', 'HtPIk/IgDJ0BvMKcgxH6vdmBJSXHhlmf'),
(45, 'Mel', 'WS+RYdpw48pyEmdgiCdRaLP+12HwoRWW'),
(46, 'Drp', 'VuY5ocPuR8r75TzhUeTacfeLszDWLpqL'),
(47, 'Thompson', 'e2CMTPvQocTapdiQWCSSseRHUZICduoO'),
(48, 'vbsn;', 'pOiySUr7ngT7zjVfGNLRBlDuLB5Cw6o/'),
(49, 'Jimmy', 'p450jK6mWxKyaUlgsae9p9pHstXW8d+p'),
(50, 'efrgqehry', 'RMxvCiaJaSaZlCd6NqVYZniLL6PkcoL0'),
(51, 'byrtgj,kuy', 'SlveLv0Hwsfm7EzNQSVor6m4sYl2iFsq'),
(52, 'vtyukgit_u', '9Rh4EO2oQJ4tFFGJEQTn843oQSpZBxL4'),
(53, 'hho', 'nCY8OVK3j5q4eo02JmOxoHLhkRUQ1mRb'),
(54, 'sdgfhjytu,', 'KYsCGCoAmyfASe0TZPwvv3AFHWp7XJie'),
(55, 'jughiho', 'o+Mmku2y1EZjH/zaE5bKqEmBC72HcaLr'),
(56, 'fbgnh', '+k6btQJKDWxZem5BQnBFM4sh7lezy5KO'),
(57, 'tyhk;oiu', 'RON//Ws1r3FJG9IXGnEZA+X5ezv4g9Yo'),
(58, 'vrji,o;up', 'EzxdZlLu8RFJ4HJYwp+LkAoQlwpGOzy4'),
(59, ',yh;pi', 'xZFvBnK/LKvLRxlxO2vIUkUnDJyzhC2R'),
(60, 'bdny,u,i;ti', '3LnpcV5h0UsrkBed/t9buv0HDmU2RXWe'),
(61, 'gvetu,ei', '5RspxD9UTeTamrQRGGEkGOlJwOmTMApM'),
(62, 'dgn,kut;l', 'qR0J2RRb6sD0ZAya8xogKhBMgDSqF9yw'),
(63, 'eqbtfyj,kuy', 'FrFXQoOzKrC0/CjtM2ePSTMitZy7USqH'),
(64, 'vebzry,i;otl', 'TQpnVPBKkS0jhvKe33qiqwwaFRyZnNgm'),
(65, 'vfdbnh', '1u1FdevTol0pTwL08ouiLPf+nexZC10k'),
(66, 'vb tydgi;ok', 'GOOd+NqsxchkqDUJ5iaFJFzEhvZkj6jq'),
(67, 'fevbsrytuh', 'Xllki+zjIQSwP6D/5f23+oaUQJgLHPFb'),
(68, 'bhtgd,idk;lukh', '5JOhCU8oKMRGJq/Vx3lxPerYnrmFCSE3'),
(69, 'hhçào', 'geSIY6KWwl4iWwUoL6NnkMPnMwfBxd/9'),
(70, 'ddgxwn,fgfhk', 'Y3uIAwHEwZdjJSt1w2P6phmrT8jj+UuB'),
(71, 'eb,uuo:io', 'p4VJPdnt63yDoAZ5vC1cowpx/u5pMiFp'),
(72, 'nyjktuk', '9hcRJ5rjcFIpB8aZrtpYACSLcpgYfsx/'),
(73, 'ihihhôl$', '7qvpyU1MMwSCal3tHUWuvUOiUqm/Fj6E'),
(74, '^jl;j', 'rw9Ui+Di109uSnT7te402mMExQ/z5jwp'),
(75, 'rfyjgtlo', 'pSDLCrSBf4+VBFTSyzdLlPHTex3PMCGa'),
(76, 'dhfjkolm', '6DFQzCVY1M4TgMtGU6kK2KZkkp2qUqAk'),
(77, 'dbfdu;k', 'mLHfuPumFMyNq4ds2aqmQjXsiggO7Qh5'),
(78, 'jpk^l^koj', 'kJ1mWiPKyVjCNRUFLhB9TalU9AvIJsJa'),
(79, 'egehrjlituou', '6b/HbVYvpsbAUMxvXI2QRIrm57ZLaRyZ'),
(80, 'dfcgf,ut;iyou:m!p:ômul', 'FBEu/xXdIBNBN6MZZzlbozNq92lX2+un');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `clue`
--
ALTER TABLE `clue`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `clue_game`
--
ALTER TABLE `clue_game`
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
-- AUTO_INCREMENT pour la table `clue_game`
--
ALTER TABLE `clue_game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
--
-- AUTO_INCREMENT pour la table `final_destination`
--
ALTER TABLE `final_destination`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT pour la table `place`
--
ALTER TABLE `place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
