import { PrismaClient } from '@prisma/client';

export const main = async () => {
  const prisma = new PrismaClient();

  const tasks = await prisma.task.findMany();

  return tasks;
};
