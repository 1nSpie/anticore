-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "brandId" INTEGER,
    "classId" INTEGER,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarClass" (
    "id" SERIAL NOT NULL,
    "class" INTEGER NOT NULL,
    "complexPrice" INTEGER NOT NULL,
    "diamondPrice" INTEGER NOT NULL,
    "insulationPrice" INTEGER NOT NULL,
    "antigravPrice" INTEGER NOT NULL,

    CONSTRAINT "CarClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarClass_class_key" ON "CarClass"("class");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_classId_fkey" FOREIGN KEY ("classId") REFERENCES "CarClass"("class") ON DELETE SET NULL ON UPDATE CASCADE;
