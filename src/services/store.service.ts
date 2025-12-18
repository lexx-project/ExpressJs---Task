import prisma from "../prisma";

interface findAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const getAllStore = async (params: findAllParams) => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: any = {
    deletedAt: null,
  };

  if (search) {
    whereClause.name = { contains: search, mode: "insensitive" };
  }

  const stores = await prisma.store.findMany({
    skip: skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy ? { [sortBy]: sortOrder || "desc" } : { createdAt: "desc" },
  });

  const totalItems = await prisma.store.count({
    where: whereClause,
  });

  return {
    stores,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
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
