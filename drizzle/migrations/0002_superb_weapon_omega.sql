ALTER TABLE "authors" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "authors_email_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "authors_user_name_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_user_name_unique" UNIQUE("user_name");