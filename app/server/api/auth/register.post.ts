import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const filePath = resolve("./server/data/users.json");
  const users = JSON.parse(readFileSync(filePath, "utf-8"));

  const exists = users.find((u: any) => u.email === body.email);
  if (exists) {
    throw createError({
      statusCode: 400,
      message: "Email već postoji",
    });
  }

  const newUser = {
    id: `usr-${crypto.randomUUID()}`,
    username: body.username,
    email: body.email,
    password: body.password,
    role: "user",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  writeFileSync(filePath, JSON.stringify(users, null, 2));

  const { password: _, ...safeUser } = newUser;
  return { success: true, data: safeUser };
});
