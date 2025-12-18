import prisma from "../prisma";

interface findAllParam {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const getAllProduct = async (params: findAllParam) => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: any = {
    deletedAt: null,
  };

  if (search) {
    whereClause.name = {
      contains: search,
      mode: "insensitive",
    };
  }

  const products = await prisma.product.findMany({
    skip: skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy ? { [sortBy]: sortOrder || "desc" } : { createdAt: "desc" },
    include: {
      category: true,
    },
  });

  const totalItems = await prisma.product.count({
    where: whereClause,
  });

  return {
    products,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
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
