import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedWorks() {
  // First, create work categories
  const categories = await Promise.all([
    prisma.workCategory.upsert({
      where: { slug: 'complex-processing' },
      update: {},
      create: {
        name: 'Комплексная обработка',
        slug: 'complex-processing'
      }
    }),
    prisma.workCategory.upsert({
      where: { slug: 'restoration' },
      update: {},
      create: {
        name: 'Восстановление',
        slug: 'restoration'
      }
    }),
    prisma.workCategory.upsert({
      where: { slug: 'prevention' },
      update: {},
      create: {
        name: 'Профилактика',
        slug: 'prevention'
      }
    }),
    prisma.workCategory.upsert({
      where: { slug: 'new-cars' },
      update: {},
      create: {
        name: 'Новые авто',
        slug: 'new-cars'
      }
    }),
    prisma.workCategory.upsert({
      where: { slug: 'winter-protection' },
      update: {},
      create: {
        name: 'Зимняя защита',
        slug: 'winter-protection'
      }
    })
  ]);

  // Create sample works
  const works = [
    {
      title: 'Toyota Camry 2018 - Комплексная обработка',
      description: 'Полная антикоррозийная обработка включая скрытые полости, днище и пороги. Автомобиль прошел полный цикл обработки с применением современных материалов.',
      slug: 'toyota-camry-2018-complex',
      beforeImage: '/works/toyota-camry-before.jpg',
      afterImage: '/works/toyota-camry-after.jpg',
      duration: '6 часов',
      year: '2024',
      carBrand: 'Toyota',
      carModel: 'Camry 2018',
      categoryId: categories[0].id,
      featured: true,
      services: ['Обработка скрытых полостей', 'Защита днища', 'Обработка порогов', 'Антикоррозийная защита сварных швов'],
      images: [
        { url: '/works/toyota-camry-process1.jpg', alt: 'Процесс обработки Toyota Camry', order: 1 },
        { url: '/works/toyota-camry-process2.jpg', alt: 'Обработка днища Toyota Camry', order: 2 },
        { url: '/works/toyota-camry-process3.jpg', alt: 'Финальный результат Toyota Camry', order: 3 }
      ]
    },
    {
      title: 'BMW X5 2020 - Защита от реагентов',
      description: 'Специальная зимняя защита от дорожных реагентов и соли. Применены инновационные составы для максимальной защиты кузова.',
      slug: 'bmw-x5-2020-winter-protection',
      beforeImage: '/works/bmw-x5-before.jpg',
      afterImage: '/works/bmw-x5-after.jpg',
      duration: '4 часа',
      year: '2024',
      carBrand: 'BMW',
      carModel: 'X5 2020',
      categoryId: categories[4].id,
      featured: true,
      services: ['Антисолевая обработка', 'Защита колесных арок', 'Обработка днища', 'Защита порогов'],
      images: [
        { url: '/works/bmw-x5-process1.jpg', alt: 'Подготовка BMW X5', order: 1 },
        { url: '/works/bmw-x5-process2.jpg', alt: 'Нанесение защитного состава', order: 2 }
      ]
    },
    {
      title: 'Ford Focus 2019 - Восстановление после коррозии',
      description: 'Удаление очагов коррозии и нанесение защитного покрытия. Комплексная работа по восстановлению антикоррозийной защиты.',
      slug: 'ford-focus-2019-restoration',
      beforeImage: '/works/ford-focus-before.jpg',
      afterImage: '/works/ford-focus-after.jpg',
      duration: '8 часов',
      year: '2024',
      carBrand: 'Ford',
      carModel: 'Focus 2019',
      categoryId: categories[1].id,
      featured: false,
      services: ['Удаление ржавчины', 'Грунтовка', 'Антикоррозийное покрытие', 'Защита сварных швов'],
      images: [
        { url: '/works/ford-focus-process1.jpg', alt: 'Очаги коррозии Ford Focus', order: 1 },
        { url: '/works/ford-focus-process2.jpg', alt: 'Процесс удаления ржавчины', order: 2 },
        { url: '/works/ford-focus-process3.jpg', alt: 'Нанесение защитного покрытия', order: 3 }
      ]
    },
    {
      title: 'Volkswagen Polo 2017 - Профилактическая обработка',
      description: 'Профилактическая обработка для продления срока службы кузова. Диагностика и превентивные меры защиты.',
      slug: 'volkswagen-polo-2017-prevention',
      beforeImage: '/works/vw-polo-before.jpg',
      afterImage: '/works/vw-polo-after.jpg',
      duration: '5 часов',
      year: '2024',
      carBrand: 'Volkswagen',
      carModel: 'Polo 2017',
      categoryId: categories[2].id,
      featured: false,
      services: ['Диагностика кузова', 'Обработка скрытых полостей', 'Защитное покрытие', 'Профилактика порогов'],
      images: [
        { url: '/works/vw-polo-process1.jpg', alt: 'Диагностика Volkswagen Polo', order: 1 },
        { url: '/works/vw-polo-process2.jpg', alt: 'Профилактическая обработка', order: 2 }
      ]
    },
    {
      title: 'Hyundai Solaris 2021 - Новый автомобиль',
      description: 'Превентивная защита нового автомобиля от коррозии. Базовая обработка для максимальной защиты с первых дней.',
      slug: 'hyundai-solaris-2021-new-car',
      beforeImage: '/works/hyundai-solaris-before.jpg',
      afterImage: '/works/hyundai-solaris-after.jpg',
      duration: '3 часа',
      year: '2024',
      carBrand: 'Hyundai',
      carModel: 'Solaris 2021',
      categoryId: categories[3].id,
      featured: true,
      services: ['Базовая обработка', 'Защита порогов', 'Обработка сварных швов', 'Защита скрытых полостей'],
      images: [
        { url: '/works/hyundai-solaris-process1.jpg', alt: 'Новый Hyundai Solaris', order: 1 },
        { url: '/works/hyundai-solaris-process2.jpg', alt: 'Базовая обработка', order: 2 }
      ]
    },
    {
      title: 'Skoda Octavia 2019 - Ремонт и защита',
      description: 'Комплексная работа по ремонту повреждений и антикоррозийной защите. Восстановление и защита кузова.',
      slug: 'skoda-octavia-2019-repair-protection',
      beforeImage: '/works/skoda-octavia-before.jpg',
      afterImage: '/works/skoda-octavia-after.jpg',
      duration: '12 часов',
      year: '2024',
      carBrand: 'Skoda',
      carModel: 'Octavia 2019',
      categoryId: categories[0].id,
      featured: false,
      services: ['Кузовной ремонт', 'Антикоррозийная обработка', 'Финишное покрытие', 'Защита днища'],
      images: [
        { url: '/works/skoda-octavia-process1.jpg', alt: 'Повреждения Skoda Octavia', order: 1 },
        { url: '/works/skoda-octavia-process2.jpg', alt: 'Процесс ремонта', order: 2 },
        { url: '/works/skoda-octavia-process3.jpg', alt: 'Антикоррозийная обработка', order: 3 },
        { url: '/works/skoda-octavia-process4.jpg', alt: 'Финальный результат', order: 4 }
      ]
    }
  ];

  // Create works with services and images
  for (const workData of works) {
    const { services, images, ...work } = workData;
    
    await prisma.work.upsert({
      where: { slug: work.slug },
      update: {},
      create: {
        ...work,
        services: {
          create: services.map(service => ({ name: service }))
        },
        images: {
          create: images.map(image => ({
            url: image.url,
            alt: image.alt,
            order: image.order
          }))
        }
      }
    });
  }

  console.log('Works seeded successfully!');
}

seedWorks()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
