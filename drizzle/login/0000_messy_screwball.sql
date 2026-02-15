-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `accounts` (
	`login` varchar(12) NOT NULL DEFAULT '''''',
	`password` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`login_retry_count` tinyint(3) unsigned NOT NULL DEFAULT 0,
	`name` varchar(50) DEFAULT 'NULL',
	`active_status` enum('PENDING','ACTIVE','LOCKED','BANNED') NOT NULL,
	`created_time` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`lastactive` bigint(13) unsigned NOT NULL DEFAULT 0,
	`accessLevel` tinyint(4) NOT NULL DEFAULT 0,
	`lastIP` char(15) DEFAULT 'NULL',
	`lastServer` tinyint(4) DEFAULT 1,
	`pcIp` char(15) DEFAULT 'NULL',
	`hop1` char(15) DEFAULT 'NULL',
	`hop2` char(15) DEFAULT 'NULL',
	`hop3` char(15) DEFAULT 'NULL',
	`hop4` char(15) DEFAULT 'NULL',
	CONSTRAINT `login` UNIQUE(`login`),
	CONSTRAINT `email` UNIQUE(`email`)
);

*/