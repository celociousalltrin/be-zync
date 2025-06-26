ALTER TABLE "authors" RENAME COLUMN "firstName" TO "first_name";--> statement-breakpoint
ALTER TABLE "authors" RENAME COLUMN "phoneNumber" TO "phone_number";--> statement-breakpoint
ALTER TABLE "authors" RENAME COLUMN "userName" TO "user_name";--> statement-breakpoint
ALTER TABLE "authors" DROP CONSTRAINT "authors_userName_unique";--> statement-breakpoint
ALTER TABLE "authors" ADD CONSTRAINT "authors_user_name_unique" UNIQUE("user_name");