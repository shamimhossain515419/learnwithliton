-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('student', 'admin', 'mentors') NULL,
    `address` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NOT NULL,
    `phone` INTEGER NULL,
    `gender` VARCHAR(191) NOT NULL,
    `discord` VARCHAR(191) NULL,
    `term` BOOLEAN NOT NULL,
    `verifiedCode` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `photo_url` VARCHAR(191) NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `discount` DOUBLE NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inside_this_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `learning_objects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `learning_purposes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prerequisites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_feedbacks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,
    `student_id` INTEGER NOT NULL,

    UNIQUE INDEX `student_feedbacks_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mentors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(400) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `about` VARCHAR(250) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,

    UNIQUE INDEX `mentors_course_id_key`(`course_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_faqs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(300) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inside_this_course` ADD CONSTRAINT `inside_this_course_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `learning_objects` ADD CONSTRAINT `learning_objects_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facilities` ADD CONSTRAINT `facilities_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `learning_purposes` ADD CONSTRAINT `learning_purposes_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `prerequisites` ADD CONSTRAINT `prerequisites_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_feedbacks` ADD CONSTRAINT `student_feedbacks_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_feedbacks` ADD CONSTRAINT `student_feedbacks_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mentors` ADD CONSTRAINT `mentors_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_faqs` ADD CONSTRAINT `course_faqs_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
