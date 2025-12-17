import { asyncHandler } from "../utils/async.handler";
import type { Request, Response } from "express";
import * as profileService from "../services/profile.service";
import { succesResponse } from "../utils/response";

const transformProfileImage = (profile: any) => {
  if (profile && profile.image) {
    return {
      ...profile,
      image: `/uploads/${profile.image}`,
    };
  }
  return profile;
};

export const getAllProfile = asyncHandler(
  async (_req: Request, res: Response) => {
    const profiles = await profileService.getAllProfile();
    const transformedProfiles = profiles.map(transformProfileImage);
    succesResponse(res, "Profile fetched successfully", transformedProfiles);
  }
);

export const getProfileById = asyncHandler(
  async (req: Request, res: Response) => {
    const profile = await profileService.getProfileById(req.params.id);
    const transformedProfile = transformProfileImage(profile);
    succesResponse(res, "Profile fetched successfully", transformedProfile);
  }
);

export const createProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, gender, address, userId } = req.body;
    const profile = await profileService.createProfile({
      name,
      gender,
      address,
      image: req.file?.filename,
      userId,
    });
    const transformedProfile = transformProfileImage(profile);
    succesResponse(res, "Profile created successfully", transformedProfile);
  }
);

export const updateProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, gender, address } = req.body;
    const updateData: any = {};

    if (name) updateData.name = name;
    if (gender) updateData.gender = gender;
    if (address) updateData.address = address;
    if (req.file) updateData.image = req.file.filename;

    const profile = await profileService.updateProfile(
      req.params.id,
      updateData
    );
    const transformedProfile = transformProfileImage(profile);
    succesResponse(res, "Profile update succesfully", transformedProfile);
  }
);

export const deleteProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const profile = await profileService.deleteProfile(req.params.id);
    succesResponse(res, "Profile deleted successfully", profile);
  }
);
