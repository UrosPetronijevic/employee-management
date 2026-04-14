import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  const filePath = resolve("./server/data/users.json");
  const users = JSON.parse(readFileSync(filePath, "utf-8"));

  const user = users.find(
    (u: any) => u.email === email && u.password === password,
  );

  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Pogrešan email ili lozinka",
    });
  }

  // Return user without password
  const { password: _, ...safeUser } = user;
  return { success: true, data: safeUser };
});
