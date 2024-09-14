/*
  Warnings:

  - You are about to alter the column `cookingStatus` on the `newOrder` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - Made the column `cookingStatus` on table `newOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_newOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT,
    "state" TEXT,
    "cookingStatus" BOOLEAN NOT NULL,
    "observation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_newOrder" ("complement", "cookingStatus", "createdAt", "id", "name", "neighborhood", "number", "observation", "phone", "state", "street") SELECT "complement", "cookingStatus", "createdAt", "id", "name", "neighborhood", "number", "observation", "phone", "state", "street" FROM "newOrder";
DROP TABLE "newOrder";
ALTER TABLE "new_newOrder" RENAME TO "newOrder";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
