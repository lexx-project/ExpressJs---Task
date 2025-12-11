import prisma from "../prisma.js";
export const getAllStore = async () => {
    return await prisma.store.findMany();
};
export const getStoreById = async (id) => {
    return await prisma.store.findUnique({
        where: {
            id
        }
    });
};
export const createStore = async (data) => {
    return await prisma.store.create({
        data
    });
};
export const updateStore = async (id, data) => {
    return await prisma.store.update({
        where: {
            id
        },
        data
    });
};
export const deleteStore = async (id) => {
    return await prisma.store.delete({
        where: {
            id
        }
    });
};
//# sourceMappingURL=store.service.js.map
