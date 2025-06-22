// model Brand {
//   id   Int    @id @default(autoincrement())
//   name String
//   cars Car[]
// }

// model Car {
//   id       Int       @id @default(autoincrement())
//   model    String
//   brandId  Int?
//   Brand    Brand?    @relation(fields: [brandId], references: [id])
//   classId  Int?
//   CarClass CarClass? @relation(fields: [classId], references: [class])
// }

// model CarClass {
//   id              Int   @id @default(autoincrement())
//   class           Int   @unique
//   complexPrice    Int
//   diamondPrice    Int
//   insulationPrice Int
//   antigravPrice   Int
//   Car             Car[]
// }

export type Brand = {
  id: number;
  name: string;
};

export type Car = {
  id: number;
  model: string;
  brandId: number;
  classId: number;
  CarClass: CarClass
};

export type CarClass = {
  id: number;
  class: string;
  basePrice: number;
  complexPrice: number;
};
