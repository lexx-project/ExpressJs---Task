import prisma from "./src/prisma.js";

const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
  "Health & Beauty",
  "Food & Beverages",
];

const stores = [
  {
    name: "TechHub Store",
    description: "Your one-stop tech shop",
    location: "Jakarta",
  },
  {
    name: "Fashion Central",
    description: "Latest fashion trends",
    location: "Bandung",
  },
  {
    name: "Home Essentials",
    description: "Everything for your home",
    location: "Surabaya",
  },
  {
    name: "Sports World",
    description: "Sports equipment and gear",
    location: "Yogyakarta",
  },
  {
    name: "Book Haven",
    description: "Books for every reader",
    location: "Medan",
  },
];

const productNames = [
  "Wireless Headphones",
  "Smart Watch",
  "Laptop Stand",
  "USB-C Cable",
  "Phone Case",
  "Bluetooth Speaker",
  "Running Shoes",
  "Yoga Mat",
  "Coffee Maker",
  "Desk Lamp",
  "Notebook Set",
  "Water Bottle",
  "Backpack",
  "Sunglasses",
  "Power Bank",
  "Keyboard",
  "Mouse Pad",
  "Tent",
  "Fitness Tracker",
  "Gaming Chair",
];

const descriptions = [
  "Premium quality product with excellent features",
  "Best seller in its category",
  "Highly rated by customers",
  "Perfect for everyday use",
  "Durable and long-lasting",
  "Modern design with functionality",
  "Great value for money",
  "Eco-friendly and sustainable",
  "Limited edition product",
  "Recommended by experts",
];

async function main() {
  console.log("🌱 Starting seed...");

  // Clean existing products (optional - comment out if you want to keep existing data)
  await prisma.product.deleteMany({});
  console.log("✅ Cleared existing products");

  // Create categories
  const createdCategories = [];
  for (const categoryName of categories) {
    const category = await prisma.category.upsert({
      where: { name: categoryName },
      update: {},
      create: { name: categoryName },
    });
    createdCategories.push(category);
  }
  console.log(`✅ Created ${createdCategories.length} categories`);

  // Create stores
  const createdStores = [];
  for (const storeData of stores) {
    const store = await prisma.store.upsert({
      where: { name: storeData.name },
      update: storeData,
      create: storeData,
    });
    createdStores.push(store);
  }
  console.log(`✅ Created ${createdStores.length} stores`);

  // Create 100 products
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const randomCategory =
      createdCategories[Math.floor(Math.random() * createdCategories.length)];
    const randomStore =
      createdStores[Math.floor(Math.random() * createdStores.length)];
    const randomName =
      productNames[Math.floor(Math.random() * productNames.length)];
    const randomDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomPrice = (Math.random() * 990000 + 10000).toFixed(2); // Between 10k - 1jt
    const randomStock = Math.floor(Math.random() * 100) + 1; // Between 1-100

    const product = await prisma.product.create({
      data: {
        name: `${randomName} #${i}`,
        description: `${randomDescription} - Product variant ${i}`,
        price: parseFloat(randomPrice),
        stock: randomStock,
        storeId: randomStore.id,
        categoryId: randomCategory.id,
      },
    });
    products.push(product);

    // Progress indicator
    if (i % 10 === 0) {
      console.log(`📦 Created ${i}/100 products...`);
    }
  }

  console.log(`✅ Successfully created ${products.length} products!`);
  console.log("\n📊 Summary:");
  console.log(`   - Categories: ${createdCategories.length}`);
  console.log(`   - Stores: ${createdStores.length}`);
  console.log(`   - Products: ${products.length}`);
  console.log("\n🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
