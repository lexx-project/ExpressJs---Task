import * as productRepo from "../repositories/product.repository";

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

  const sortCriteria = sortBy
    ? { [sortBy]: sortOrder || "desc" }
    : { createdAt: "desc" as const };

  const products = await productRepo.findAll(
    skip,
    limit,
    whereClause,
    sortCriteria
  );

  const totalItems = await productRepo.countAll(whereClause);

  return {
    products,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
  };
};

export const createProduct = async (data: any) => {
  return await productRepo.create(data);
};

export const getProductById = async (id: string) => {
  return await productRepo.findById(id);
};

export const updateProduct = async (id: string, data: any) => {
  return await productRepo.update(id, data);
};

export const deleteProduct = async (id: string) => {
  return await productRepo.softDelete(id);
};
