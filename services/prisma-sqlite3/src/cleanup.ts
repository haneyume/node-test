import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function main() {
  // ############################################
  //
  // Post Service
  //
  // ############################################

  await prisma.postLike.deleteMany({});
  await prisma.post.deleteMany({});

  // ############################################
  //
  // User Service
  //
  // ############################################

  await prisma.user.deleteMany({});
}
