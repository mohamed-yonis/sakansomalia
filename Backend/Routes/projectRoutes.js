import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  upload,
} from "../Controllers/projectController.js";

const router = express.Router();

// Project routes with image upload handling
router.post("/projects", upload.single("image"), createProject);
router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.put("/projects/:id", upload.single("image"), updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
