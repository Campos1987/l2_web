ALTER TABLE `gk_about` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `gk_about` MODIFY COLUMN `description` text DEFAULT ('NULL');--> statement-breakpoint
ALTER TABLE `gk_about` MODIFY COLUMN `is_active` tinyint NOT NULL DEFAULT 1;--> statement-breakpoint
ALTER TABLE `gk_event` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `gk_event` MODIFY COLUMN `content` text DEFAULT ('NULL');--> statement-breakpoint
ALTER TABLE `gk_event` MODIFY COLUMN `is_active` tinyint NOT NULL;--> statement-breakpoint
ALTER TABLE `gk_event` MODIFY COLUMN `is_active` tinyint NOT NULL DEFAULT 0;--> statement-breakpoint
ALTER TABLE `gk_news` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `gk_news` MODIFY COLUMN `content` text DEFAULT ('NULL');--> statement-breakpoint
ALTER TABLE `gk_news` MODIFY COLUMN `is_active` tinyint NOT NULL DEFAULT 1;