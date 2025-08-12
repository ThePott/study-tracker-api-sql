-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('STUDENT', 'INSTRUCTOR');

-- CreateTable
CREATE TABLE "public"."app_user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "role" "public"."UserRole" NOT NULL,

    CONSTRAINT "plugin_pkey" PRIMARY KEY ("id")
);
