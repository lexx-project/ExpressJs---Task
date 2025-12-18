import prisma from "../prisma";

interface findAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const getAllCategory = async (params: findAllParams) => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: any = {
    deletedAt: null,
  };

  if (search) {
    whereClause.name = { contains: search, mode: "insensitive" };
  }

  const categories = await prisma.category.findMany({
    skip: skip,
    take: limit,
    where: whereClause,
    orderBy: sortBy ? { [sortBy]: sortOrder || "desc" } : { createdAt: "desc" },
  });

  const totalItems = await prisma.category.count({
    where: whereClause,
  });

  return {
    categories,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
};

export const getCategoryById = async (id: string) => {
  return await prisma.category.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
};

export const createCategory = async (data: any) => {
  return await prisma.category.create({
    data,
  });
};

export const updateCategory = async (id: string, data: any) => {
  return await prisma.category.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteCategory = async (id: string) => {
  return await prisma.category.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
