import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  const kadrovskiBroj = getRouterParam(event, "kadrovskiBroj");
  const body = await readBody(event);
  const filePath = resolve("./server/data/employees.json");
  const employees = JSON.parse(readFileSync(filePath, "utf-8"));

  const index = employees.findIndex(
    (e: any) => e.kadrovskiBroj === kadrovskiBroj,
  );
  if (index === -1) {
    throw createError({ statusCode: 404, message: "Zaposleni nije pronađen" });
  }

  employees[index] = { ...employees[index], ...body };
  writeFileSync(filePath, JSON.stringify(employees, null, 2));
  return { success: true, data: employees[index] };
});
