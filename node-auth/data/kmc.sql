-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 10:30 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `coach`
--

CREATE TABLE `coach` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT '12 Meter Coach',
  `seats` int(20) DEFAULT 90,
  `image` enum('items/COACH_1.png','items/COACH_2.png','','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coach`
--

INSERT INTO `coach` (`id`, `name`, `seats`, `image`) VALUES
(1, '12 Meter Coach', 90, 'items/COACH_1.png'),
(2, '12 Meter Coach', 90, 'items/COACH_2.png'),
(3, '12 Meter Coach', 90, 'items/COACH_2.png'),
(4, '12 Meter Coach', 90, 'items/COACH_1.png'),
(5, '12 Meter Coach', 90, 'items/COACH_2.png'),
(6, '12 Meter Coach', 90, 'items/COACH_1.png');

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
-- Table structure for table `evs`
--

CREATE TABLE `evs` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dimensions` varchar(100) DEFAULT '12,190*2,550*3,160 mm',
  `wheelbase` varchar(100) DEFAULT '4175',
  `ranges` int(100) DEFAULT 90,
  `grossVehicleWeight` int(100) DEFAULT 1200,
  `power` int(100) DEFAULT 25,
  `carryingCapacity` varchar(100) DEFAULT '90',
  `image` enum('images/EVS_1.png','images/EVS_2.png','','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evs`
--

INSERT INTO `evs` (`id`, `name`, `dimensions`, `wheelbase`, `ranges`, `grossVehicleWeight`, `power`, `carryingCapacity`, `image`) VALUES
(1, '12 Meter EVS 2024', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_1.png'),
(2, '12 Meter EVS 2022', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_2.png'),
(3, '10 Meter EVS', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_1.png'),
(4, '8 Meter EVS', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_2.png'),
(5, '12 Meter EVS', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_1.png'),
(6, '12 Meter EVS', '12,190*2,550*3,160 mm', '4175', 90, 1200, 25, '90', 'images/EVS_2.png');

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
(1, 'kenny', 'black', 'black', 'orange', '70', 1),
(2, '12 Meter EVS 2024', 'Blue', 'Black', 'Chrome', '70 (32/38)', 6);

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
(1, 'Backpack', 25000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'images/KMC-Backpack.png'),
(2, 'Long-sleeved Shirt', 30000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'images/KMC-LongSleeved.png'),
(3, 'Short-sleeved Shirt', 25000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'images/KMC-ShortSleeved.png'),
(4, 'Umbrella', 40000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'images/KMC-Umbrella.png');

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
('ZvU_vVNYOEYYF_VF6uSBVouY5bUqUIya', 1721112185, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-07-16T06:40:52.984Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":6,\"username\":\"John\",\"fname\":\"John\",\"lname\":\"Doe\",\"email\":\"johndoe@gmail.com\",\"country\":\"Uganda\",\"phone\":\"0765423242\",\"category\":\"customer\",\"password\":\"$2a$08$nw6yAHnkdtHp6t02RhJ5m.ekNS0tUNEzDTbmT3O17Hquy8gh7O9J2\",\"confrim_password\":\"\"}}'),
('cVRApL60bqQov_bAdyhCrIOv5qbx2qcv', 1721036974, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-07-15T09:32:34.975Z\",\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":6,\"username\":\"John\",\"fname\":\"John\",\"lname\":\"Doe\",\"email\":\"johndoe@gmail.com\",\"country\":\"Uganda\",\"phone\":\"0765423242\",\"category\":\"customer\",\"password\":\"$2a$08$nw6yAHnkdtHp6t02RhJ5m.ekNS0tUNEzDTbmT3O17Hquy8gh7O9J2\",\"confrim_password\":\"\"}}');

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
(6, 'John', 'John', 'Doe', 'johndoe@gmail.com', 'Uganda', '0765423242', 'customer', '$2a$08$nw6yAHnkdtHp6t02RhJ5m.ekNS0tUNEzDTbmT3O17Hquy8gh7O9J2', ''),
(9, 'a', 'a', 'a', 'a@d.v', 'a', '0', 'dealer', '$2a$08$5VKv1DNIU8nit78azEMwxuyuQ1kPhj/kIcx5lXLVZ0GQiUsIUcYOa', '');

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
-- Indexes for table `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coach_orders`
--
ALTER TABLE `coach_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `evs`
--
ALTER TABLE `evs`
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
-- AUTO_INCREMENT for table `coach`
--
ALTER TABLE `coach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `coach_orders`
--
ALTER TABLE `coach_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `evs`
--
ALTER TABLE `evs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `evs_orders`
--
ALTER TABLE `evs_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
