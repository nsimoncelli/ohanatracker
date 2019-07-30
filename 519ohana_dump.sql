-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 30, 2019 at 03:15 AM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `519ohana`
--

-- --------------------------------------------------------

--
-- Table structure for table `babies`
--

CREATE TABLE `babies` (
  `babies` mediumint(9) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `babies`
--

INSERT INTO `babies` (`babies`, `name`, `dob`, `gender`) VALUES
(1, 'Nick', '1990-07-26', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `baby_entries`
--

CREATE TABLE `baby_entries` (
  `id` mediumint(9) NOT NULL,
  `baby_id` mediumint(9) NOT NULL,
  `user_id` mediumint(9) NOT NULL,
  `started_at` datetime DEFAULT NULL,
  `finished_at` datetime NOT NULL,
  `entry_type` enum('feedings','naps','changes') COLLATE utf8_unicode_ci NOT NULL,
  `other_info` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `baby_entries`
--

INSERT INTO `baby_entries` (`id`, `baby_id`, `user_id`, `started_at`, `finished_at`, `entry_type`, `other_info`) VALUES
(1, 1, 1, NULL, '2019-07-14 03:41:14', 'changes', '{\"change_type\": 2}'),
(2, 1, 3, NULL, '2019-07-15 13:11:04', 'naps', '{}'),
(3, 1, 2, NULL, '2019-07-14 03:41:14', 'changes', '{\"change_type\": 3}'),
(4, 1, 2, NULL, '2019-07-15 13:14:54', 'feedings', '{}'),
(5, 1, 2, NULL, '2019-07-15 13:14:54', 'feedings', '{}'),
(6, 1, 2, NULL, '2019-07-14 03:41:14', 'changes', '{\"change_type\": 3}'),
(9, 1, 1, NULL, '2019-07-29 14:20:00', 'naps', '{}'),
(10, 1, 2, NULL, '2019-07-28 08:14:54', 'feedings', '{}'),
(11, 1, 3, NULL, '2019-07-29 05:41:14', 'naps', '{}'),
(12, 1, 2, NULL, '2019-07-27 09:23:44', 'changes', '{\"change_type\": 3}'),
(13, 1, 1, NULL, '2019-07-27 19:25:46', 'changes', '{\"change_type\": 1}'),
(14, 1, 3, NULL, '2019-07-28 23:37:59', 'changes', '{\"change_type\": 2}'),
(15, 1, 2, NULL, '2019-07-28 10:41:28', 'feedings', '{}'),
(16, 1, 1, NULL, '2019-07-26 07:37:28', 'feedings', '{}'),
(17, 1, 3, NULL, '2019-07-23 12:30:29', 'naps', '{}'),
(18, 1, 3, NULL, '2019-07-25 17:27:20', 'changes', '{\"change_type\": 3}'),
(19, 1, 2, NULL, '2019-07-24 18:57:11', 'naps', '{}'),
(20, 1, 1, NULL, '2019-07-24 14:18:08', 'feedings', '{}'),
(21, 1, 2, NULL, '2019-07-24 18:22:23', 'changes', '{\"change_type\": 2}'),
(22, 1, 1, NULL, '2019-07-24 09:11:27', 'naps', '{}'),
(23, 1, 1, NULL, '2019-07-22 15:21:27', 'feedings', '{}'),
(24, 1, 1, NULL, '2019-07-29 14:20:00', 'naps', '{}'),
(25, 1, 2, NULL, '2019-07-28 08:14:54', 'feedings', '{}'),
(26, 1, 3, NULL, '2019-07-29 05:41:14', 'naps', '{}'),
(27, 1, 2, NULL, '2019-07-27 09:23:44', 'changes', '{\"change_type\": 3}'),
(28, 1, 1, NULL, '2019-07-27 19:25:46', 'changes', '{\"change_type\": 1}'),
(29, 1, 3, NULL, '2019-07-28 23:37:59', 'changes', '{\"change_type\": 2}'),
(30, 1, 2, NULL, '2019-07-28 10:41:28', 'feedings', '{}'),
(31, 1, 1, NULL, '2019-07-26 07:37:28', 'feedings', '{}'),
(32, 1, 3, NULL, '2019-07-23 12:30:29', 'naps', '{}'),
(33, 1, 3, NULL, '2019-07-25 17:27:20', 'changes', '{\"change_type\": 3}'),
(34, 1, 2, NULL, '2019-07-24 18:57:11', 'naps', '{}'),
(35, 1, 1, NULL, '2019-07-24 14:18:08', 'feedings', '{}'),
(36, 1, 2, NULL, '2019-07-24 18:22:23', 'changes', '{\"change_type\": 2}'),
(37, 1, 1, NULL, '2019-07-24 09:11:27', 'naps', '{}'),
(38, 1, 1, NULL, '2019-07-22 15:21:27', 'feedings', '{}');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` mediumint(9) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`) VALUES
(1, 'parent', 'dad'),
(2, 'parent', 'mom'),
(3, 'parent', 'dad'),
(4, 'parent', 'mom'),
(5, 'caretaker', 'daycare teacher'),
(6, 'caretaker', 'daycare teacher');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` mediumint(9) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`) VALUES
(1, 'Steve Min'),
(2, 'Bisham Mohabir'),
(3, 'Elliot Han');

-- --------------------------------------------------------

--
-- Table structure for table `user_babies`
--

CREATE TABLE `user_babies` (
  `id` mediumint(9) NOT NULL,
  `user_id` mediumint(9) NOT NULL,
  `baby_id` mediumint(9) NOT NULL,
  `role_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_babies`
--

INSERT INTO `user_babies` (`id`, `user_id`, `baby_id`, `role_id`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 2),
(3, 3, 1, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `babies`
--
ALTER TABLE `babies`
  ADD PRIMARY KEY (`babies`);

--
-- Indexes for table `baby_entries`
--
ALTER TABLE `baby_entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_babies`
--
ALTER TABLE `user_babies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `babies`
--
ALTER TABLE `babies`
  MODIFY `babies` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `baby_entries`
--
ALTER TABLE `baby_entries`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user_babies`
--
ALTER TABLE `user_babies`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
