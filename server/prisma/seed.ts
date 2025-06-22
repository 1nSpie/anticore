import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Очистка перед сидом (опционально)
  await prisma.car.deleteMany({});
  await prisma.brand.deleteMany({});
  await prisma.employee.deleteMany({});
  await prisma.carClass.deleteMany({});

  // Добавляем классы авто (CarClass)
  const classes = [
    { id: 1, basePrice: 21000, complexPrice: 25000 },
    { id: 2, basePrice: 23000, complexPrice: 27000 },
    { id: 3, basePrice: 26000, complexPrice: 30000 },
    { id: 4, basePrice: 30000, complexPrice: 35000 },
  ];

  await prisma.carClass.createMany({
    data: classes,
    skipDuplicates: true,
  });

  console.log('✅ CarClass создан');

  // Добавляем бренды автомобилей (Brand)
  const brands = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Mercedes' },
    { id: 3, name: 'Toyota' },
    { id: 4, name: 'Ford' },
    { id: 5, name: 'Hyundai' },
    { id: 6, name: 'Kia' },
    { id: 7, name: 'Volkswagen' },
    { id: 8, name: 'Audi' },
    { id: 9, name: 'Lexus' },
    { id: 10, name: 'Mazda' },
  ];

  await prisma.brand.createMany({
    data: brands,
    skipDuplicates: true,
  });

  console.log('✅ Brand создан');

  // Добавляем модели автомобилей (Car)
  const cars = [
    { model: 'X3', brandId: 1, classId: 1 },
    { model: 'E-class', brandId: 2, classId: 2 },
    { model: 'Camry', brandId: 3, classId: 2 },
    { model: 'Focus', brandId: 4, classId: 1 },
    { model: 'Santa Fe', brandId: 5, classId: 3 },
    { model: 'Sorento', brandId: 6, classId: 3 },
    { model: 'Passat', brandId: 7, classId: 2 },
    { model: 'A4', brandId: 8, classId: 2 },
    { model: 'RX', brandId: 9, classId: 4 },
    { model: 'CX-5', brandId: 10, classId: 3 },
  ];

  await prisma.car.createMany({
    data: cars,
    skipDuplicates: true,
  });

  console.log('✅ Car создан');

  // Добавляем сотрудников (Employee)
  const employees = [
    {
      firstName: 'Иван',
      lastName: 'Петров',
      position: 'Менеджер по работе с клиентами',
      avatar: '/avatars/ivan.png',
    },
    {
      firstName: 'Олег',
      lastName: 'Смирнов',
      position: 'Мастер-антикорщик',
      avatar: '/avatars/oleg.png',
    },
    {
      firstName: 'Алексей',
      lastName: 'Иванов',
      position: 'Консультант',
      avatar: '/avatars/alexey.png',
    },
    {
      firstName: 'Наталья',
      lastName: 'Соколова',
      position: 'Менеджер по гарантии',
      avatar: '/avatars/natalya.png',
    },
    {
      firstName: 'Дмитрий',
      lastName: 'Кузнецов',
      position: 'Руководитель отдела',
      avatar: '/avatars/dmitriy.png',
    },
  ];

  await prisma.employee.createMany({
    data: employees,
    skipDuplicates: true,
  });

  console.log('✅ Employee создан');
}

main()
  .then(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
