import prisma from "../prisma";

export const getAllProfile = async () => {
  return await prisma.profile.findMany({ where: { deletedAt: null } });
};

export const getProfileById = async (id: string) => {
  return await prisma.profile.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
};

export const createProfile = async (data: any) => {
  return await prisma.profile.create({
    data,
  });
};

export const updateProfile = async (id: string, data: any) => {
  return await prisma.profile.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProfile = async (id: string) => {
  return await prisma.profile.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });
};
