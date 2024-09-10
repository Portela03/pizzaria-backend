-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ref" TEXT NOT NULL,
    "retailPrice" TEXT NOT NULL,
    "wholesalePrice" TEXT NOT NULL
);
