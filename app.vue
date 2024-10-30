<script setup lang="ts">
import { isTemplateExpression } from 'typescript';

const item = ref({
  id: 0,
  quantity: 0,
  Clothing: {
    gender: "mens"
  }
})




const foo = await prisma.clothing.findFirst({
  where: {
    id: 1
  }
})
if(foo.gender == "mens")
/*
 {
id: 1,
size:"XL",
gender: "mens",
type: "blouse"
 }

*/
// api/clothing/list.get.ts
await prisma.inventory.findMany({
  where:{
    clothing_id: {
      not: null
    }
  },
  include: {
    Clothing: true
  }
})
/*
  const inventoryItem = {
    quantity: 0,
    Clothing: {
      id: 0,
      gender: "mens"  
    } 
  }
    inventoryItem.Clothing.id
*/

// api/food/list.get.ts
await prisma.inventory.findMany({
  where:{
    food_id: {
      not: null
    }
  }
})

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <p>Sizing</p>
    <select>
      <option value="mens">Mens</option>
      <option value="womens">Womens</option>
      <option value="mens">Mens</option>
    </select>

    <select v-if="item.Clothing"></select>
    <p v-if="!item.quantity">Item out of stock</p>
  </div>
</template>
