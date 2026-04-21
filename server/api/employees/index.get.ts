import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler(() => {
  const filePath = resolve("./server/data/employees.json");
  const employees = JSON.parse(readFileSync(filePath, "utf-8"));
  return { success: true, data: employees };
});
