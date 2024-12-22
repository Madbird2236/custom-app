import { Router } from 'express';
import OnboardingController from './onboardingController';

const router = Router();

router.post('/onboard', OnboardingController.startOnboarding);
router.get('/checklist/:employeeId', OnboardingController.getOnboardingChecklist);
router.post('/complete/:employeeId', OnboardingController.completeOnboarding);

export default router;