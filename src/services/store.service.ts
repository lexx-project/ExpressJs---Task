import prisma from '../prisma';

export const getAllStore = async () => {
    return await prisma.store.findMany()
}

    export const getStoreById = async (id: string) => {
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

export const updateStore = async (id: string, data: any) => {
    return await prisma.store.update({
        where: {
            id
        },
        data
    })
}

export const deleteStore = async (id: string) => {
    return await prisma.store.delete({
        where: {
            id
        }
    })
}