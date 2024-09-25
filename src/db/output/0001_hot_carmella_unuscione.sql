ALTER TABLE "users" ALTER COLUMN "userId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'CUSTOMER';--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "emailVerified" timestamp;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "emailVerificationToken" varchar(255);--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "twoFactorAuth" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "accounts" ADD COLUMN "twoFactorAuthToken" smallint;