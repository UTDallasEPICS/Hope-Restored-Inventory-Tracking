/*
  Warnings:

  - You are about to drop the column `description` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `sizeType` on the `Size` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Size" DROP COLUMN "description",
DROP COLUMN "sizeType";
