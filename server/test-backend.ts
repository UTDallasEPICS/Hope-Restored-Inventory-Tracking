import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to parse the barcode into IDs
function parseBarcode(barcode: string) {
  if (barcode.length !== 8) throw new Error('Invalid barcode length');
  return {
    categoryId: parseInt(barcode.slice(0, 2)),
    styleId: parseInt(barcode.slice(2, 4)),
    sizeId: parseInt(barcode.slice(4, 6)),
    genderId: parseInt(barcode.slice(6, 8)),
  };
}

// Main function to test the backend and database queries
async function testDatabase(barcode: string) {
  try {
    const { categoryId, styleId, sizeId, genderId } = parseBarcode(barcode);
    
    // Query related records from the database
    const [category, style, size, gender, inventory] = await Promise.all([
      prisma.itemCategory.findUnique({ where: { id: categoryId } }),
      prisma.itemStyle.findUnique({ where: { id: styleId } }),
      prisma.size.findUnique({ where: { id: sizeId } }),
      prisma.gender.findUnique({ where: { id: genderId } }),
      prisma.inventory.findUnique({ where: { barcode} })
    ]);

    // Check if any records are missing
    if (!category || !style || !size || !gender|| !barcode) {
      console.error('One or more records not found');
      return;
    }

    // Log the combined result
    console.log('Inventory Details:');
    console.log(`Barcode: ${barcode}`);
    console.log(`Category: ${category.name}`);
    console.log(`Style: ${style.name}`);
    console.log(`Size: ${size.sizeCode}`);
    console.log(`Gender: ${gender.name}`);
    console.log(`Quantity: ${inventory.quantity}`)
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test function with a sample barcode
testDatabase('02030503');
