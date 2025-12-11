import prisma from '../prisma';

export const getAllStore = async () => {
    return await prisma.store.findMany()
}

    export const getStoreById = async (id: number) => {
    return await prisma.store.findUnique({
        where: {
            id
        }
    })
}   

export const createStore = async (data: any) => {
    return await prisma.store.create({
        data
    })
}

export const updateStore = async (id: number, data: any) => {
    return await prisma.store.update({
        where: {
            id
        },
        data
    })
}

export const deleteStore = async (id: number) => {
    return await prisma.store.delete({
        where: {
            id
        }
    })
}