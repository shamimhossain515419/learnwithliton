-- AlterTable
ALTER TABLE `course_faqs` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `courses` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `mentors` ADD COLUMN `education` VARCHAR(250) NULL,
    ADD COLUMN `email` VARCHAR(50) NULL,
    ADD COLUMN `phone` VARCHAR(50) NULL,
    MODIFY `about` VARCHAR(300) NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `student_feedbacks` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `address` VARCHAR(500) NULL;

-- CreateTable
CREATE TABLE `assignmentShowcase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `photo` VARCHAR(500) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `assignmentShowcase` ADD CONSTRAINT `assignmentShowcase_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
