import { Router } from 'express';
import TimeSheetController from './timeSheetController';

const router = Router();
const timeSheetController = new TimeSheetController();

router.post('/log-hours', timeSheetController.logHours);
router.get('/reports', timeSheetController.getReports);

export default router;