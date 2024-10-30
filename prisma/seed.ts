import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert the first category
  const category = await prisma.itemCategory.create({
    data: { name: 'Shirts' },
  });

  // Insert the first style
  const style = await prisma.itemStyle.create({
    data: { name: 'Casual', categoryId: category.id },
  });

  // Insert the first size
  const size = await prisma.size.create({
    data: { sizeCode: 'M' },
  });

  // Insert the first gender
  const gender = await prisma.gender.create({
    data: { name: 'Men' },
  });

  // Insert an inventory item with the barcode `01010101`
  await prisma.inventory.create({
    data: {
      barcode: '01010101',
      quantity: 10,
      categoryId: category.id, // 1 (01 in barcode)
      styleId: style.id,       // 1 (01 in barcode)
      sizeId: size.id,         // 1 (01 in barcode)
      genderId: gender.id,     // 1 (01 in barcode)
    },
  });

  console.log('First batch of data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
