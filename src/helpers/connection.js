import { PrismaClient } from '@prisma/client';

const connection = new PrismaClient();
export const getConnection = () => connection;
