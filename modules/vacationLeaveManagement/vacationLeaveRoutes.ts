import { Router } from 'express';
import { VacationLeaveController } from './vacationLeaveController';

const router = Router();
const vacationLeaveController = new VacationLeaveController();

// Route to request leave
router.post('/request', vacationLeaveController.requestLeave);

// Route to approve leave
router.post('/approve/:id', vacationLeaveController.approveLeave);

// Route to reject leave
router.post('/reject/:id', vacationLeaveController.rejectLeave);

// Route to get leave requests
router.get('/requests', vacationLeaveController.getLeaveRequests);

// Route to get leave balance
router.get('/balance/:employeeId', vacationLeaveController.getLeaveBalance);

export default router;