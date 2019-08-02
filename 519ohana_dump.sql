-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 02, 2019 at 06:09 PM
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
  `started_at` timestamp NULL DEFAULT NULL,
  `finished_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` date DEFAULT NULL,
  `entry_type` enum('feedings','naps','changes') COLLATE utf8_unicode_ci NOT NULL,
  `other_info` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `baby_entries`
--

INSERT INTO `baby_entries` (`id`, `baby_id`, `user_id`, `started_at`, `finished_at`, `date`, `entry_type`, `other_info`) VALUES
(62, 1, 3, NULL, '2019-07-25 04:16:09', '2019-07-25', 'naps', '{}'),
(63, 1, 2, NULL, '2019-07-25 06:20:18', '2019-07-25', 'feedings', '{}'),
(64, 1, 2, NULL, '2019-07-25 08:34:28', '2019-07-25', 'changes', '{\"change_type\": 2}'),
(65, 1, 1, NULL, '2019-07-25 13:40:29', '2019-07-25', 'naps', '{}'),
(66, 1, 1, NULL, '2019-07-25 19:39:34', '2019-07-25', 'changes', '{\"change_type\": 1}'),
(67, 1, 3, NULL, '2019-07-25 19:29:40', '2019-07-25', 'feedings', '{}'),
(68, 1, 2, NULL, '2019-07-25 21:28:39', '2019-07-25', 'naps', '{}'),
(69, 1, 3, NULL, '2019-07-26 07:36:35', '2019-07-26', 'feedings', '{}'),
(70, 1, 2, NULL, '2019-07-26 08:32:33', '2019-07-26', 'naps', '{}'),
(71, 1, 2, NULL, '2019-07-26 15:50:32', '2019-07-26', 'changes', '{\"change_type\": 3}'),
(72, 1, 2, NULL, '2019-07-26 14:12:09', '2019-07-26', 'feedings', '{}'),
(73, 1, 3, NULL, '2019-07-26 15:35:21', '2019-07-26', 'naps', '{}'),
(74, 1, 2, NULL, '2019-07-27 11:43:31', '2019-07-27', 'changes', '{\"change_type\": 2}'),
(75, 1, 2, NULL, '2019-07-27 11:43:31', '2019-07-27', 'changes', '{\"change_type\": 2}'),
(76, 1, 1, NULL, '2019-07-28 11:43:31', '2019-07-28', 'changes', '{\"change_type\": 2}'),
(78, 1, 3, NULL, '2019-07-30 11:43:31', '2019-07-30', 'changes', '{\"change_type\": 3}'),
(79, 1, 1, NULL, '2019-07-31 11:43:31', '2019-07-31', 'changes', '{\"change_type\": 2}'),
(80, 1, 3, NULL, '2019-07-28 11:43:31', '2019-07-28', 'changes', '{\"change_type\": 1}'),
(82, 1, 1, NULL, '2019-07-30 18:43:31', '2019-07-30', 'changes', '{\"change_type\": 1}'),
(83, 1, 3, NULL, '2019-07-31 11:43:31', '2019-07-31', 'changes', '{\"change_type\": 1}'),
(84, 1, 1, NULL, '2019-07-30 01:43:31', '2019-07-30', 'changes', '{\"change_type\": 1}'),
(85, 1, 3, NULL, '2019-08-01 12:43:31', '2019-08-01', 'changes', '{\"change_type\": 1}'),
(86, 1, 3, NULL, '2019-08-01 06:43:31', '2019-08-01', 'changes', '{\"change_type\": 2}'),
(87, 1, 2, NULL, '2019-08-01 07:43:31', '2019-08-01', 'changes', '{\"change_type\": 3}'),
(88, 1, 2, NULL, '2019-07-27 03:14:00', '2019-07-27', 'naps', '{}'),
(89, 1, 2, NULL, '2019-07-27 03:14:00', '2019-07-27', 'naps', '{}'),
(90, 1, 3, NULL, '2019-07-27 03:14:00', '2019-07-27', 'naps', '{}'),
(91, 1, 1, NULL, '2019-07-28 03:14:00', '2019-07-28', 'naps', '{}'),
(92, 1, 2, NULL, '2019-07-28 13:14:00', '2019-07-28', 'naps', '{}'),
(93, 1, 2, NULL, '2019-07-29 03:14:00', '2019-07-29', 'naps', '{}'),
(94, 1, 1, NULL, '2019-07-29 15:14:00', '2019-07-29', 'naps', '{}'),
(95, 1, 1, NULL, '2019-07-30 03:14:00', '2019-07-30', 'naps', '{}'),
(96, 1, 2, NULL, '2019-07-31 03:14:00', '2019-07-31', 'naps', '{}'),
(97, 1, 2, NULL, '2019-07-31 13:14:00', '2019-07-31', 'naps', '{}'),
(98, 1, 3, NULL, '2019-07-31 22:14:00', '2019-07-31', 'naps', '{}'),
(99, 1, 2, NULL, '2019-07-31 14:14:00', '2019-07-31', 'naps', '{}'),
(100, 1, 3, NULL, '2019-08-01 03:14:00', '2019-08-01', 'naps', '{}'),
(101, 1, 2, NULL, '2019-08-02 11:28:28', '2019-08-01', 'feedings', '{}'),
(102, 1, 3, NULL, '2019-07-27 02:40:22', '2019-07-27', 'feedings', '{}'),
(103, 1, 3, NULL, '2019-07-27 03:40:22', '2019-07-27', 'feedings', '{}'),
(104, 1, 3, NULL, '2019-07-28 13:40:22', '2019-07-28', 'feedings', '{}'),
(105, 1, 3, NULL, '2019-07-28 14:40:22', '2019-07-28', 'feedings', '{}'),
(106, 1, 3, NULL, '2019-07-27 03:40:22', '2019-07-27', 'feedings', '{}'),
(107, 1, 2, NULL, '2019-07-29 03:40:22', '2019-07-29', 'feedings', '{}'),
(108, 1, 1, NULL, '2019-07-29 23:40:22', '2019-07-29', 'feedings', '{}'),
(109, 1, 3, NULL, '2019-07-30 03:40:22', '2019-07-30', 'feedings', '{}'),
(110, 1, 1, NULL, '2019-07-31 03:40:22', '2019-07-31', 'feedings', '{}'),
(111, 1, 3, NULL, '2019-07-31 03:40:22', '2019-07-31', 'feedings', '{}'),
(112, 1, 1, NULL, '2019-07-31 03:40:22', '2019-07-31', 'feedings', '{}'),
(113, 1, 3, NULL, '2019-08-01 03:40:22', '2019-08-01', 'feedings', '{}'),
(114, 1, 3, NULL, '2019-08-01 03:40:22', '2019-08-01', 'feedings', '{}'),
(115, 1, 3, NULL, '2019-08-01 03:40:22', '2019-08-01', 'feedings', '{}'),
(116, 1, 3, NULL, '2019-08-01 03:40:22', '2019-08-01', 'feedings', '{}'),
(117, 1, 3, NULL, '2019-08-01 03:40:22', '2019-08-01', 'feedings', '{}'),
(118, 1, 1, NULL, '2019-08-02 10:58:30', '2019-08-02', 'changes', '{\"change_type\": 1}'),
(119, 1, 2, NULL, '2019-08-02 11:01:08', '2019-08-02', 'feedings', '{}'),
(120, 1, 1, NULL, '2019-08-02 11:02:42', '2019-08-02', 'naps', '{}');

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
(3, 'caretaker', 'daycare teacher');

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
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
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
