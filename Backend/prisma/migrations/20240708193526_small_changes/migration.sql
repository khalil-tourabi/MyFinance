-- AlterTable
ALTER TABLE `categorie` MODIFY `budgetCategorie` DOUBLE NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `dateTransaction` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `adresse` VARCHAR(191) NULL,
    MODIFY `num` VARCHAR(191) NULL;
