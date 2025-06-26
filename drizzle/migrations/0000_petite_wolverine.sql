CREATE TABLE "authors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstName" varchar(100) NOT NULL,
	"last_name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phoneNumber" varchar(15) NOT NULL,
	"userName" varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "authors_email_unique" UNIQUE("email"),
	CONSTRAINT "authors_userName_unique" UNIQUE("userName")
);
