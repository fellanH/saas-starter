CREATE TABLE "bylaws" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer NOT NULL,
	"url" text NOT NULL,
	"uploaded_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "bylaws" ADD CONSTRAINT "bylaws_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "bylaws_team_id_idx" ON "bylaws" USING btree ("team_id");