/*
  Warnings:

  - Added the required column `newsletter` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `newsletter` BOOLEAN NOT NULL;
