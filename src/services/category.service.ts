import prisma from "../prisma"

export const getAllCategory = async () => {
    return await prisma.category.findMany()
}

export const getCategoryById = async (id: number) => {
    return await prisma.category.findUnique({
        where: {
            id
        }
    })
}

export const createCategory = async (data: any) => {
    return await prisma.category.create({
        data
    })
}

export const updateCategory = async (id: number, data: any) => {
    return await prisma.category.update({
        where: {
            id
        },
        data
    })
}

export const deleteCategory = async (id: number) => {
    return await prisma.category.delete({
        where: {
            id
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