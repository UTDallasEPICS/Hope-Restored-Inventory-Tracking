import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /*
  const categories = [
    'Blouses',
    'Shirts',
    'Tops',
    'Dresses',
    'Dress Pants / Slacks',
    'Suits',
    'Jeans',
    'Shorts',
    'Socks',
    'Underwear',
    'Shoes / Boots',
    'Sweater / Sweatshirt',
    'Coats / Jackets / Hoodies'
  ];
  // Insert the first category
  for (const name of categories) {
    const category = await prisma.itemCategory.create({
      data: { name: name },
    });
    console.log(`Created category: ${category.name}`);
  }
*/
  // Insert the first style
  /*
  const styles = [
    'Long Sleeve',
    'Short Sleeve',
    'T-Shirt',
    'Casual',
    'Fancy',
    'Canvas',
    'Leather',
    'Misc.'
  ];

  // Create each style in the database under the fetched category
  for (const name of styles) {
    const style = await prisma.itemStyle.create({
      data: { name: name },
    });
    console.log(`Created style: ${style.name} with ID ${style.id}`);
  }
*/

  // Insert the first size
/*
const sizeCodes = [
    // Basic sizes
    "XS", "S", "M", "L", "XL", "2XL", "3XL", 
    "0", "2", "4", "6", "8", "10", "12", 
    "14", "16", "18", "20", "22", "24", "26",
    
    // Sizes with measurements
    "S, 14-14.5\"", "M, 15-15.5\"", "L, 16-16.5\"", 
    "XL, 17-17.5\"", "2XL, 18-18.5\"", "3XL, 19-19.5\"", "4XL, 20-20.5\" up",
    "S, 29-30\"", "M, 31-33\"", "L, 34-35\"", 
    "XL, 36-38\"", "2XL, 40-42", "3XL, 44-48", "4XL, 50\" up",
    
    // Infant and toddler sizes
    "0-3 mos", "3-6 mos", "6-12 mos", "12-18 mos", 
    "18 mos", "2T - 4T", "5 - 8", "10 -12", "14 +",

    // Numeric sizes
    "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", 
    "6.0", "6.5", "7.0", "7.5", "8.0", "8.5", 
    "9.0", "9.5", "10.0", "10.5", "11.0", "11.5", 
    "12.0", "12.5", "13.0", "14 +"
  ];
  for (const code of sizeCodes){
    const size = await prisma.size.create({
      data: { sizeCode: code },
    });
    console.log(`size code: ${size.sizeCode}`);
  }
  */
 
  // Insert the first gender
  /*
  const genders = [
    'Men',
    'Woman',
    'Children'
  ];
  for (const name of genders) { 
    const gender = await prisma.gender.create({
      data: { name: name },
    });
    console.log(`Created gender: ${gender.name}`);

  }
*/

  const category = await prisma.itemCategory.findFirst();
  const style = await prisma.itemStyle.findFirst();
  const size = await prisma.size.findFirst();
  const gender = await prisma.gender.findFirst();

  if (!category || !style || !size || !gender) {
    console.log('One or more required entities are missing');
    return; // Exit if any required data is missing
  }
  // Insert an inventory item with the barcode `01010101`
  await prisma.inventory.create({
    data: {
      barcode: '02030403',
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
