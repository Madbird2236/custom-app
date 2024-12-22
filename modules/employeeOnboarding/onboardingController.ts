export class OnboardingController {
    constructor(private onboardingService: OnboardingService) {}

    async createOnboarding(req, res) {
        try {
            const onboardingData = req.body;
            const result = await this.onboardingService.createOnboarding(onboardingData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getOnboardingChecklist(req, res) {
        try {
            const employeeId = req.params.id;
            const checklist = await this.onboardingService.getOnboardingChecklist(employeeId);
            res.status(200).json(checklist);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateOnboardingStatus(req, res) {
        try {
            const { employeeId, status } = req.body;
            const result = await this.onboardingService.updateOnboardingStatus(employeeId, status);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}