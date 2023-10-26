-- CreateTable
CREATE TABLE "recoveries" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "recoveries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recoveries" ADD CONSTRAINT "recoveries_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
