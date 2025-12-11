import prisma from "../prisma.js";
export const getAllCategory = async () => {
    return await prisma.category.findMany();
};
export const getCategoryById = async (id) => {
    return await prisma.category.findUnique({
        where: {
            id
        }
    });
};
export const createCategory = async (data) => {
    return await prisma.category.create({
        data
    });
};
export const updateCategory = async (id, data) => {
    return await prisma.category.update({
        where: {
            id
        },
        data
    });
};
export const deleteCategory = async (id) => {
    return await prisma.category.delete({
        where: {
            id
        }
    });
};
export const searchCategories = async (name) => {
    let result = await getAllCategory();
    if (name) {
        result = result.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
    }
    return result;
};
//# sourceMappingURL=category.service.js.map
