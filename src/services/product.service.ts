import prisma from "../prisma";

export const getAllProduct = async () => {
  return await prisma.product.findMany({
    where: {
      deletedAt: null,
    },
  });
};

export const createProduct = async (data: any) => {
  return await prisma.product.create({
    data,
  });
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
};

export const updateProduct = async (id: string, data: any) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProduct = async (id: string) => {
  return await prisma.product.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
