import express from 'express';
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { applyJobs, getApplicants, getAppliedJobs, updateStatus } from '../controllers/applicationController.js';

const applicationRouter = express.Router();

applicationRouter.get("/apply/:id", isAuthenticated , applyJobs)
applicationRouter.get("/get", isAuthenticated, getAppliedJobs)
applicationRouter.get("/:id/applicants", isAuthenticated, getApplicants)
applicationRouter.post("/status/:id/update", isAuthenticated, updateStatus )

export default applicationRouter;









