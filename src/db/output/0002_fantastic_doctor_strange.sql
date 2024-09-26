DROP TABLE "users";--> statement-breakpoint
ALTER TABLE "accounts" ALTER COLUMN "twoFactorAuthToken" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "name" varchar(255);--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "role" varchar DEFAULT 'CUSTOMER';--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "refresh_token" varchar(255);--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "access_token" varchar(255);