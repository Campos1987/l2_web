-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `gk_about` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`title` varchar(191) NOT NULL,
	`description` text DEFAULT 'NULL',
	`is_active` tinyint(1) NOT NULL DEFAULT 1,
	`created_at` datetime(3) NOT NULL DEFAULT 'current_timestamp(3)',
	`image` varchar(191) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `gk_event` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`schedule` varchar(191) DEFAULT 'NULL',
	`title` varchar(191) NOT NULL,
	`content` text DEFAULT 'NULL',
	`slug` varchar(191) NOT NULL,
	`is_active` bit(1) NOT NULL DEFAULT 'b''1''',
	`type` varchar(191) DEFAULT 'NULL',
	`created_at` datetime(3) NOT NULL DEFAULT 'current_timestamp(3)',
	CONSTRAINT `gk_event_slug_key` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `gk_news` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`schedule` varchar(191) DEFAULT 'NULL',
	`title` varchar(191) NOT NULL,
	`content` text DEFAULT 'NULL',
	`slug` varchar(191) NOT NULL,
	`is_active` tinyint(1) NOT NULL DEFAULT 1,
	`type` varchar(191) DEFAULT 'NULL',
	`created_at` datetime(3) NOT NULL DEFAULT 'current_timestamp(3)',
	CONSTRAINT `gk_news_slug_key` UNIQUE(`slug`)
);

*/