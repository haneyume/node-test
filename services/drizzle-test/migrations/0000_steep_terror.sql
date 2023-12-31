CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL,
	`age` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
