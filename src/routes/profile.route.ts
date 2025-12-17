import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller";
import {
  createProfileValidation,
  deleteProfileValidation,
  getProfileValidation,
  updateProfileValidation,
} from "../middleware/profile.validation";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.get("/profiles", getAllProfile);
router.get("/profiles/:id", getProfileValidation, getProfileById);
router.post(
  "/profiles",
  upload.single("image"),
  createProfileValidation,
  createProfile
);
router.put(
  "/profiles/:id",
  upload.single("image"),
  updateProfileValidation,
  updateProfile
);
router.delete("/profiles/:id", deleteProfileValidation, deleteProfile);

export default router;
