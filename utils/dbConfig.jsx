import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://budget-planner_owner:PRuEAmr6K3fk@ep-cool-truth-a1x0e5xy.ap-southeast-1.aws.neon.tech/Expense-tracker?sslmode=require"
);
const db = drizzle(sql, { schema });
