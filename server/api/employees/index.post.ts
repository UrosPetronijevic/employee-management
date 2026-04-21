import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const filePath = resolve("./server/data/employees.json");
  const employees = JSON.parse(readFileSync(filePath, "utf-8"));

  // Check if kadrovskiBroj already exists
  const exists = employees.find(
    (e: any) => e.kadrovskiBroj === body.kadrovskiBroj,
  );
  if (exists) {
    throw createError({
      statusCode: 400,
      message: "Kadrovski broj već postoji",
    });
  }

  employees.push(body);
  writeFileSync(filePath, JSON.stringify(employees, null, 2));
  return { success: true, data: body };
});
