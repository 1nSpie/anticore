// prisma/seed.ts
import { PrismaClient } from '../generated/prisma'; // или '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  // === Car Classes ===
  await prisma.carClass.deleteMany({});
  const carClasses = await prisma.carClass.createMany({
    data: [
      {
        class: 1,
        complexPrice: 1000,
        diamondPrice: 500,
        insulationPrice: 300,
        antigravPrice: 800,
      },
      {
        class: 2,
        complexPrice: 1500,
        diamondPrice: 700,
        insulationPrice: 400,
        antigravPrice: 1000,
      },
    ],
  });
  console.log('✅ Created car classes:', carClasses);

  // === Brands ===
  await prisma.brand.deleteMany({});
  const brands = await prisma.brand.createManyAndReturn({
    data: [{ name: 'Toyota' }, { name: 'BMW' }],
  });
  console.log('✅ Created brands:', brands);

  await prisma.car.deleteMany({});
  const cars = await prisma.car.createMany({
    data: [
      { model: 'Corolla', brandId: brands[0].id, classId: 1 },
      { model: 'X5', brandId: brands[1].id, classId: 2 },
    ],
  });
  console.log('✅ Created cars:', cars);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
