import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  const kadrovskiBroj = getRouterParam(event, "kadrovskiBroj");
  const filePath = resolve("./server/data/employees.json");
  const employees = JSON.parse(readFileSync(filePath, "utf-8"));

  const employee = employees.find(
    (e: any) => e.kadrovskiBroj === kadrovskiBroj,
  );
  if (!employee) {
    throw createError({ statusCode: 404, message: "Zaposleni nije pronađen" });
  }
  return { success: true, data: employee };
});
