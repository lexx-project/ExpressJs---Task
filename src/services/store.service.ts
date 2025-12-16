import prisma from "../prisma";

export const getAllStore = async () => {
  return await prisma.store.findMany({
    where: {
      deletedAt: null,
    },
  });
};

export const getStoreById = async (id: string) => {
  return await prisma.store.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
};

export const createStore = async (data: any, userId: string) => {
  return await prisma.store.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const updateStore = async (id: string, data: any) => {
  return await prisma.store.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteStore = async (id: string) => {
  return await prisma.store.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
