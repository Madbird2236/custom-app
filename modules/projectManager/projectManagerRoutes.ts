import { Router } from 'express';
import { ProjectManagerController } from './projectManagerController';

const router = Router();
const projectManagerController = new ProjectManagerController();

// Define project management routes
router.post('/projects', projectManagerController.createProject);
router.get('/projects', projectManagerController.getAllProjects);
router.get('/projects/:id', projectManagerController.getProjectById);
router.put('/projects/:id', projectManagerController.updateProject);
router.delete('/projects/:id', projectManagerController.deleteProject);

export default router;