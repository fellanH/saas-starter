"use server";

import { db } from "@/lib/db/drizzle";
import { bylaws } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";

export async function saveBylawUrl(teamId: number, url: string) {
  await db.insert(bylaws).values({
    teamId,
    url,
  });

  revalidatePath("/dashboard");
}
