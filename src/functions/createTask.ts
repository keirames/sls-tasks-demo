import { PrismaClient } from '@prisma/client';
import { v4 } from 'uuid';

export const main = async () => {
  const prisma = new PrismaClient();

  const createdTask = await prisma.task.create({ data: { id: v4() } });

  return { id: createdTask.id };
};
