-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2024 at 01:16 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kmc`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `item_id` int(50) DEFAULT NULL,
  `quantity` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `user_id`, `item_id`, `quantity`) VALUES
(1, 6, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `coach_orders`
--

CREATE TABLE `coach_orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `exteriorColor` varchar(100) DEFAULT NULL,
  `interiorColor` varchar(100) DEFAULT NULL,
  `floorTrim` varchar(100) DEFAULT NULL,
  `capacity` varchar(100) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coach_orders`
--

INSERT INTO `coach_orders` (`id`, `name`, `exteriorColor`, `interiorColor`, `floorTrim`, `capacity`, `user_id`) VALUES
(1, 'Jane Doe', 'black', 'black', 'orange', '70', 1);

-- --------------------------------------------------------

--
-- Table structure for table `evs_orders`
--

CREATE TABLE `evs_orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `exteriorColor` varchar(100) DEFAULT NULL,
  `interiorColor` varchar(100) DEFAULT NULL,
  `floorTrim` varchar(100) DEFAULT NULL,
  `capacity` varchar(100) DEFAULT NULL,
  `user_id` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evs_orders`
--

INSERT INTO `evs_orders` (`id`, `name`, `exteriorColor`, `interiorColor`, `floorTrim`, `capacity`, `user_id`) VALUES
(1, 'kenny', 'black', 'black', 'orange', '70', 1);

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `description`, `image_path`) VALUES
(1, 'KMC Backpack', 25000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'images/KMC-Backpack.png');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('rZpQXD-FfKV36lOSClvEvW_otK5NO0HZ', 1720955527, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-07-14T11:08:47.855Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":6,\"username\":\"John\",\"fname\":\"John\",\"lname\":\"Doe\",\"email\":\"johndoe@gmail.com\",\"country\":\"Uganda\",\"phone\":\"0765423242\",\"category\":\"customer\",\"password\":\"$2a$08$nw6yAHnkdtHp6t02RhJ5m.ekNS0tUNEzDTbmT3O17Hquy8gh7O9J2\",\"confrim_password\":\"\"}}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `country` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `category` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confrim_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fname`, `lname`, `email`, `country`, `phone`, `category`, `password`, `confrim_password`) VALUES
(1, 'Sarah', 'Sarah', 'Akello', 'sarah@gmail.com', 'Uganda', '0700556672', 'personal', '$2a$08$dtLVcrZol7.l5HasNDU/5.JbsucsXSL7s.h9MJulrKRvQ7SvtxQDu', ''),
(2, 'Rita', 'Rita', 'Apio', 'rita@gmail.com', 'uganda', '078588343', 'business', '$2a$08$IpNptQyksVAMuxHihYDnguDOPN5ycQBRVCypl/dcJaurg5k5tPBpq', ''),
(3, 'mina', 'mina', 'Nakato', 'mina@gmail.com', 'uganda', '0757898998', 'perdonal', '$2a$08$uNxu86U4HMpltxBOWTBz0.cr83jXr59waHnEpShazcXycO2bNQN9.', ''),
(4, 'Nina', 'Nina', 'Amo', 'nina@gmail.com', 'uganda', '07887474389', 'personal', '$2a$08$eBeTtInpkHjxiClpbk8A4epexZlOthujyrnV2xUk2JIkiNuwq6e7O', ''),
(5, 'Tina', 'Tina', 'Nakato', 'tina@gmail.com', 'kenya', '07683936332', 'business', '$2a$08$rjrR0Kpn1Hnb1FTzbTjvP.qXmRoOdFaAviHQlK3m3e9JssHCkra6.', ''),
(6, 'John', 'John', 'Doe', 'johndoe@gmail.com', 'Uganda', '0765423242', 'customer', '$2a$08$nw6yAHnkdtHp6t02RhJ5m.ekNS0tUNEzDTbmT3O17Hquy8gh7O9J2', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `coach_orders`
--
ALTER TABLE `coach_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evs_orders`
--
ALTER TABLE `evs_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coach_orders`
--
ALTER TABLE `coach_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `evs_orders`
--
ALTER TABLE `evs_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`),
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
