import prisma from './src/prisma';

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Budi Tester",
      email: "budi@test.com",
    },
  });
  
  console.log("✅ User Berhasil Dibuat!");
  console.log("👉 ID UUID User:", user.id); // <-- INI YANG KAMU COPY
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());