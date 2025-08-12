-- CreateEnum
CREATE TYPE "public"."app_user_role" AS ENUM ('INSTRUCTOR', 'STUDENT');

-- CreateTable
CREATE TABLE "public"."app_user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "role" "public"."app_user_role" NOT NULL,

    CONSTRAINT "app_user_pkey" PRIMARY KEY ("id")
);
