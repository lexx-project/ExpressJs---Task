import prisma from "../prisma.js";
export const getAllProduct = async () => {
    return await prisma.product.findMany({
        where: {
            deletedAt: null
        }
    });
};
export const createProduct = async (data) => {
    return await prisma.product.create({
        data
    });
};
export const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: {
            id,
            deletedAt: null
        }
    });
};
export const updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: {
            id,
        },
        data
    });
};
export const deleteProduct = async (id) => {
    return await prisma.product.update({
        where: {
            id
        },
        data: {
            deletedAt: new Date()
        }
    });
};
//# sourceMappingURL=product.service.js.map
