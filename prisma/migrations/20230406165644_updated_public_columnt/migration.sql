/*
  Warnings:

  - You are about to drop the column `public` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "public",
ADD COLUMN     "isPublic" BOOLEAN DEFAULT true;
