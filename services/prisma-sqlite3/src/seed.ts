import { PrismaClient, User, Post } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const userCount = 100;
const userList: Array<User> = [];
const postList: Array<Post> = [];

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
  await createUsers();
  await createPosts();
  await createLikes();
}

async function createUsers() {
  console.log(`Creating users`);

  for (let i = 0; i < userCount; i++) {
    console.log(`Creating user ${i}`);

    try {
      const gender = faker.name.sexType();

      const user = await prisma.user.create({
        data: {
          email: faker.internet.email(),
          nickname: faker.name.fullName({ sex: gender }),
          avatar: faker.image.avatar(),
          gender: gender,
          dateOfBirth: faker.date.past(Math.random() * 50 + 10),
          intro: faker.lorem.paragraph(),
          country: faker.address.country(),
        },
      });

      userList.push(user);
    } catch (e) {
      console.log(e);
    }
  }
}

async function createPosts() {
  console.log(`Creating posts`);

  for (let i = 0; i < userCount; i++) {
    const postCount = faker.datatype.number({
      min: 5,
      max: 20,
    });

    for (let j = 0; j < postCount; j++) {
      console.log(`Creating post ${j} for user ${i}`);

      const user = userList[i];

      try {
        const post = await prisma.post.create({
          data: {
            userId: user.id,
            medias: faker.image.image(512, 512, true),
            content: faker.lorem.paragraph(),
          },
        });

        // update post count
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            postCount: {
              increment: 1,
            },
          },
        });

        postList.push(post);
      } catch (e) {
        console.log(e);
      }
    }
  }
}

async function createLikes() {
  console.log(`Creating likes`);

  for (let i = 0; i < userCount; i++) {
    const likeCount = faker.datatype.number({
      min: 5,
      max: 20,
    });

    for (let j = 0; j < likeCount; j++) {
      console.log(`Creating like ${j} for user ${i}`);

      const user = userList[i];
      const post = postList[faker.datatype.number(postList.length - 1)];

      try {
        await prisma.postLike.create({
          data: {
            userId: user.id,
            postId: post.id,
          },
        });

        // update like count
        await prisma.post.update({
          where: {
            id: post.id,
          },
          data: {
            likeCount: {
              increment: 1,
            },
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
}
