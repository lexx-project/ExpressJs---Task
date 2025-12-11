import prisma from "../prisma"

export const getAllProduct = async () => {
    return await prisma.product.findMany();
}

export const createProduct = async (data: any) => {
    return await prisma.product.create({
        data
    })
}

export const getProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: {
            id
        }
    })
}

export const updateProduct = async (id: number, data: any) => {
    return await prisma.product.update({
        where: {
            id
        },
        data
    })
}

export const deleteProduct = async (id: number) => {
    return await prisma.product.delete({
        where: {
            id
        }
    })
}