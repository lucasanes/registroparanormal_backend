-- CreateEnum
CREATE TYPE "EnumRole" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "EnumRole" NOT NULL DEFAULT 'USER';
