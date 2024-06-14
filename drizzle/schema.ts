import { sqliteTable, AnySQLiteColumn, text, integer } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
    id: text("id"),
    fullname: text("fullname"),
    age: integer("age"),
});