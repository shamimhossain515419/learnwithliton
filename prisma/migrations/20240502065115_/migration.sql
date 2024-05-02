-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roll` INTEGER NULL,
    `address` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NOT NULL,
    `phone` INTEGER NULL,
    `gender` VARCHAR(191) NOT NULL,
    `discord` VARCHAR(191) NULL,
    `term` BOOLEAN NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
