
import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync(
  "app.db"
);

export function initializeDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS category (
      id varchar(255) PRIMARY KEY AUTOINCREMENT,
      nameCategory varchar(255) NOT NULL,
    );
  `);
}