import { db } from "../database/database";
import { Category } from "../types/Category";

export function createCategory(nameCategory: string) {
  db.runSync(
    `
      INSERT INTO category
      (nameCategory)
      VALUES (?)
    `,
    nameCategory,
  );
}

export function getAllCategory() {
  return db.getAllSync<Category>(`
    SELECT *
    FROM category
    ORDER BY id DESC
  `);
}

export function getCategoryId(id: string) {
  return db.getFirstSync<Category>(
    `
      SELECT *
      FROM category
      WHERE id = ?
    `,
    id,
  );
}

export function updateCategory(id: string, nameCategory: string) {
  db.runSync(
    `
      UPDATE category
      SET
        nameCategory = ?,
      WHERE id = ?
    `,
    id,
    nameCategory,
  );
}

export function deleteProduct(id: string) {
  db.runSync(
    `
      DELETE FROM category
      WHERE id = ?
    `,
    id
  );
}