import prisma from "../prisma"

export const getAllCategory = async () => {
    return await prisma.category.findMany({
        where: {
            deletedAt: null
        }
    })
}

export const getCategoryById = async (id: string) => {
    return await prisma.category.findUnique({
        where: {
            id,
            deletedAt: null
        }
    })
}

export const createCategory = async (data: any) => {
    return await prisma.category.create({
        data
    })
}

export const updateCategory = async (id: string, data: any) => {
    return await prisma.category.update({
        where: {
            id,
        },
        data
    })
}

export const deleteCategory = async (id: string) => {
    return await prisma.category.update({
        where: {
            id,
        },
        data: {
            deletedAt: new Date()
        }
    })
}

export const searchCategories = async (name: string) => {
    let result = await getAllCategory()
    if(name) {
        result = result.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
    }
    return result
}