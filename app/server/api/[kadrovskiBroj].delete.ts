import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  const kadrovskiBroj = getRouterParam(event, "kadrovskiBroj");
  const filePath = resolve("./server/data/employees.json");
  let employees = JSON.parse(readFileSync(filePath, "utf-8"));

  const exists = employees.find((e: any) => e.kadrovskiBroj === kadrovskiBroj);
  if (!exists) {
    throw createError({ statusCode: 404, message: "Zaposleni nije pronađen" });
  }

  employees = employees.filter((e: any) => e.kadrovskiBroj !== kadrovskiBroj);
  writeFileSync(filePath, JSON.stringify(employees, null, 2));
  return { success: true };
});
